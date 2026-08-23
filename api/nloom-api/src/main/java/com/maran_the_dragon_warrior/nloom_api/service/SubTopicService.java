package com.maran_the_dragon_warrior.nloom_api.service;

import com.maran_the_dragon_warrior.nloom_api.models.SubTopic;
import com.maran_the_dragon_warrior.nloom_api.repository.SubTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubTopicService {

    private final SubTopicRepository subTopicRepository;

    public SubTopicService(@Autowired SubTopicRepository subTopicRepository) {
        this.subTopicRepository = subTopicRepository;
    }

    public SubTopic createSubTopic(SubTopic subTopic) {
        return subTopicRepository.save(subTopic);
    }

    public SubTopic updateSubTopic(SubTopic subTopic) {
        return subTopicRepository.save(subTopic);
    }

    public void deleteSubTopic(String id) {
        subTopicRepository.deleteById(id);
    }

    public List<SubTopic> getAllSubTopics() {
        return subTopicRepository.findAll();
    }

    public List<SubTopic> getAllSubTopicsByUserId(String userId) {
        return subTopicRepository.findAllSubTopicsByUserId(userId);
    }

    public List<SubTopic> getAllSubTopicsByTopicId(String topicId) {
        return subTopicRepository.findAllSubTopicsByTopicId(topicId);
    }

    public SubTopic getSubTopicById(String id) {
        return subTopicRepository.findById(id).orElse(null);
    }
}
