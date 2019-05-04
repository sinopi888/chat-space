
## user_groupテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|name|references|null: false, foreign_key: true|


### Association
- has_many :members
- has_many :messages

##groupテーブル

|Column|Type|Options|
|------|----|-------|
|group|references|null: false, foreign_key: true|
|name|references|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :messages

##messageテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
|body|text|
|image|string|

### Association
- belongs_to :group
- belongs_to :user
