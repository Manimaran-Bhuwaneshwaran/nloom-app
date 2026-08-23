package com.maran_the_dragon_warrior.nloom_api.controller;

import com.maran_the_dragon_warrior.nloom_api.models.Notes;
import com.maran_the_dragon_warrior.nloom_api.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NotesController {

    private final NotesService notesService;

    public NotesController(@Autowired NotesService notesService) {
        this.notesService = notesService;
    }

    @GetMapping
    public List<Notes> getAllNotess() {
        return notesService.getAllNotes();
    }

    @GetMapping("/{id}")
    public Notes getNotesById(@PathVariable("id") String id) {
        return notesService.getNotesById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Notes> getAllNotesByUserId(@PathVariable("userId") String userId) {
        return notesService.getAllNotesByUserId(userId);
    }

    @GetMapping("/subTopic/{subTopicId}")
    public List<Notes> getAllNotesBySubTopicId(@PathVariable("subTopicId") String subTopicId) {
        return notesService.getAllNotesBySubTopicId(subTopicId);
    }

    @PostMapping
    public Notes createNotes(@RequestBody Notes topic) {
        return notesService.createNotes(topic);
    }

    @PutMapping
    public Notes updateNotes(@RequestBody Notes topic) {
        return notesService.updateNotes(topic);
    }

    @DeleteMapping("/{id}")
    public void deleteNotes(@PathVariable("id") String id) {
        notesService.deleteNotes(id);
    }

}
