package com.maran_the_dragon_warrior.nloom_api.repository;

import com.maran_the_dragon_warrior.nloom_api.models.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TopicRepository extends MongoRepository<Topic, String> {

    @Query("{ 'userId': ?0 }")
    List<Topic> findAllTopicsByUserId(String userId);

}
