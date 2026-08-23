package com.maran_the_dragon_warrior.nloom_api.controller;

import com.maran_the_dragon_warrior.nloom_api.models.Topic;
import com.maran_the_dragon_warrior.nloom_api.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
public class TopicController {

    private final TopicService topicService;

    public TopicController(@Autowired TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping
    public List<Topic> getAllTopics() {
        return topicService.getAllTopics();
    }

    @GetMapping("/{id}")
    public Topic getTopicById(@PathVariable("id") String id) {
        return topicService.getTopicById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Topic> getAllTopicsByUserId(@PathVariable("userId") String userId) {
        return topicService.getAllTopicsByUserId(userId);
    }

    @PostMapping
    public Topic createTopic(@RequestBody Topic topic) {
        return topicService.createTopic(topic);
    }

    @PutMapping
    public Topic updateTopic(@RequestBody Topic topic) {
        return topicService.updateTopic(topic);
    }

    @DeleteMapping("/{id}")
    public void deleteTopic(@PathVariable("id") String id) {
        topicService.deleteTopic(id);
    }

}
