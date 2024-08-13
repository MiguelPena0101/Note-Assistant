const express = require('express');
const fs = require('fs');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

// HTML Routes
// Serve notes.html on /notes path
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// Fallback route to serve index.html on all other paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// API Routes

// GET /api/notes - Retrieve all notes
app.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, './db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading notes:', err);
      return res.status(500).json({ error: 'Failed to read notes' });
    }
    res.json(JSON.parse(data));
  });
});

// POST /api/notes - Save a new note
app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;

  // Validate request
  if (!title || !text) {
    return res.status(400).json({ error: 'Note must have a title and text' });
  }

  // Read existing notes from db.json
  fs.readFile(path.join(__dirname, './db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading notes:', err);
      return res.status(500).json({ error: 'Failed to save note' });
    }

    const notes = JSON.parse(data);

    // Create new note object with incremental ID
    const newNote = {
      id: notes.length ? notes[notes.length - 1].id + 1 : 1,  // Incremental ID
      title,
      text
    };

    // Add new note to array
    notes.push(newNote);

    // Write updated notes array back to db.json
    fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error('Error saving note:', err);
        return res.status(500).json({ error: 'Failed to save note' });
      }

      res.json(newNote);
    });
  });
});

// DELETE /api/notes/:id - Delete a note by ID
app.delete('/api/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);

  // Read existing notes from db.json
  fs.readFile(path.join(__dirname, './db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading notes:', err);
      return res.status(500).json({ error: 'Failed to delete note' });
    }

    let notes = JSON.parse(data);

    // Filter out the note with the matching ID
    notes = notes.filter(note => note.id !== noteId);

    // Write updated notes array back to db.json
    fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error('Error deleting note:', err);
        return res.status(500).json({ error: 'Failed to delete note' });
      }

      res.json({ message: 'Note deleted successfully' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});