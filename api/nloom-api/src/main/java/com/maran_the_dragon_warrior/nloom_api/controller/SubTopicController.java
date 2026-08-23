package com.maran_the_dragon_warrior.nloom_api.controller;

import com.maran_the_dragon_warrior.nloom_api.models.SubTopic;
import com.maran_the_dragon_warrior.nloom_api.service.SubTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subtopics")
public class SubTopicController {

    private final SubTopicService subTopicService;

    public SubTopicController(@Autowired SubTopicService subTopicService) {
        this.subTopicService = subTopicService;
    }

    @GetMapping
    public List<SubTopic> getAllSubTopics() {
        return subTopicService.getAllSubTopics();
    }

    @GetMapping("/{id}")
    public SubTopic getSubTopicById(@PathVariable("id") String id) {
        return subTopicService.getSubTopicById(id);
    }

    @GetMapping("/user/{userId}")
    public List<SubTopic> getAllSubTopicsByUserId(@PathVariable("userId") String userId) {
        return subTopicService.getAllSubTopicsByUserId(userId);
    }

    @GetMapping("/topic/{topicId}")
    public List<SubTopic> getAllSubTopicsByTopicId(@PathVariable("topicId") String topicId) {
        return subTopicService.getAllSubTopicsByTopicId(topicId);
    }


    @PostMapping
    public SubTopic createSubTopic(@RequestBody SubTopic topic) {
        return subTopicService.createSubTopic(topic);
    }

    @PutMapping
    public SubTopic updateSubTopic(@RequestBody SubTopic topic) {
        return subTopicService.updateSubTopic(topic);
    }

    @DeleteMapping("/{id}")
    public void deleteSubTopic(@PathVariable("id") String id) {
        subTopicService.deleteSubTopic(id);
    }

}
