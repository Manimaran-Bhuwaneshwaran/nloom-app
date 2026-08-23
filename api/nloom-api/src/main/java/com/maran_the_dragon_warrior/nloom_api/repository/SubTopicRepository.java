package com.maran_the_dragon_warrior.nloom_api.repository;

import com.maran_the_dragon_warrior.nloom_api.models.SubTopic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SubTopicRepository extends MongoRepository<SubTopic, String> {

    @Query("{ 'userId' : ?0 }")
    List<SubTopic> findAllSubTopicsByUserId(String userId);

    @Query("{ 'topicId' : ?0 }")
    List<SubTopic> findAllSubTopicsByTopicId(String topicId);
}
