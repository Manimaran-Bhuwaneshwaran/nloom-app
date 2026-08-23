package com.maran_the_dragon_warrior.nloom_api.service;

import com.maran_the_dragon_warrior.nloom_api.models.Topic;
import com.maran_the_dragon_warrior.nloom_api.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    private final TopicRepository topicRepository;

    public TopicService(@Autowired TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public Topic createTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    public Topic updateTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    public void deleteTopic(String id) {
        topicRepository.deleteById(id);
    }

    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    public List<Topic> getAllTopicsByUserId(String userId) {
        return topicRepository.findAllTopicsByUserId(userId);
    }

    public Topic getTopicById(String id) {
        return topicRepository.findById(id).orElse(null);
    }
}
