
## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|user_name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :images
- has_many :messages

##groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :images
- has_many :messages

##messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user
- has_many :images

##imageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|

- belongs_to :group
- belongs_to :user
- belongs_to :message
