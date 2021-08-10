create table `user`(
    `id` bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` varchar(255),
    `username` varchar(255),
    `password` varchar(255)
);

create table `question`(
    `id` bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(255),
    `description` varchar(255),
    `creation_date` datetime,
    `user_id` bigint NOT NULL
);

create table `comment`(
    `id` bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `description` varchar(255),
    `creation_date` datetime,
    `question_id` bigint NOT NULL,
    `user_id` bigint NOT NULL
);