CREATE TABLE `notes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `note_body` varchar(255) DEFAULT NULL,
  `note_heading` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
          REFERENCES user (`id`)
          ON DELETE CASCADE
);