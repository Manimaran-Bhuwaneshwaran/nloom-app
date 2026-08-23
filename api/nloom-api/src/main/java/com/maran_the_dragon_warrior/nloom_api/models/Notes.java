package com.maran_the_dragon_warrior.nloom_api.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "notes")
public class Notes {
    @Id
    private String id;
    private String subTopicId;
    private String userId;
    private Boolean isEdited;
    private Boolean isArchived;
    private String content;
    private Date createdAt;
    private Date updatedAt;
}
