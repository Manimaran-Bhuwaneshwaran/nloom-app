package com.maran_the_dragon_warrior.nloom_api.service;

import com.maran_the_dragon_warrior.nloom_api.models.Notes;
import com.maran_the_dragon_warrior.nloom_api.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotesService {

    private final NotesRepository notesRepository;

    public NotesService(@Autowired NotesRepository notesRepository) {
        this.notesRepository = notesRepository;
    }

    public Notes createNotes(Notes notes) {
        return notesRepository.save(notes);
    }

    public Notes updateNotes(Notes notes) {
        return notesRepository.save(notes);
    }

    public void deleteNotes(String id) {
        notesRepository.deleteById(id);
    }

    public List<Notes> getAllNotes() {
        return notesRepository.findAll();
    }

    public List<Notes> getAllNotesByUserId(String userId) {
        return notesRepository.findAllNotesByUserId(userId);
    }

    public List<Notes> getAllNotesBySubTopicId(String subTopicId) {
        return notesRepository.findAllNotesBySubTopicId(subTopicId);
    }

    public Notes getNotesById(String id) {
        return notesRepository.findById(id).orElse(null);
    }
}
