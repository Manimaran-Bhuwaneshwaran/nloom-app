package com.maran_the_dragon_warrior.nloom_api.repository;

import com.maran_the_dragon_warrior.nloom_api.models.Notes;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotesRepository extends MongoRepository<Notes, String> {
    List<Notes> findAllNotesByUserId(String userId);

    List<Notes> findAllNotesBySubTopicId(String subTopicId);
}
