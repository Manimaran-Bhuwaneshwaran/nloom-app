package com.maran_the_dragon_warrior.nloom_api.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "subtopics")
public class SubTopic {
    @Id
    private String id;
    private String topicId;
    private String userId;
    private Boolean isEdited;
    private String name;
    private Date createdAt;
    private Date updatedAt;
}
