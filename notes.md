# BLOG API

>Create a backend and two different front-ends for accessing and editing blog posts to demonstrate the power and flexibility of >separating your backend code from your frontend code.
>
>One of the front-end sites will be for people that want to read and comment on your posts.
>The other one will be just for you to write, edit and publish your posts.




## Begin by designing your back end models and schemas


- For a simple blog with only a single author you might not need a user model, but you might want to set up authentication so that you can protect the editing functions with a username and password. In that case, it might make sense to set up a minimal user model, even if you are the only user.

- Your blog should have posts and comments, so think about the fields you are going to want to include for each of those.

- Are you going to require users to leave a username or email with their comments?

- Are you going to display a date or a timestamp for posts and comments?

- Posts should probably have a title, but should comments?

- A useful feature for a blog is the ability to have posts that are in the database but not published for the public to read. How might you designate published vs unpublished posts in your DB?

Set up your express app, and define the models in mongoose.

Set up your routes and controllers. Think about RESTful organization for this one. Most of the examples in the previous lesson were centered around posts and comments so this shouldn’t be too tricky.




## Once your API is working you can focus on your front-end code


All you should have to do to get your posts into a website is to fetch the correct API endpoint and then display the results. Work with fetch and APIs.

Create a second website for authoring and editing your posts. You can set this up however you like but the following features might be useful:

- A list of all posts that shows whether or not they have been published.

- A button to publish unpublished posts, or to unpublish published ones!

- A ‘NEW POST’ form. If you want to get fancy, you could use a rich text editor such as TinyMCE.

- The ability to manage comments (i.e. delete or edit them).

# NOTES
```

const UserSchema = new mongoose.Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
        admin: { type: Boolean, required: true },
});

const PostSchema = new mongoose.Schema({
        author: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
        title: { type: String, required: true },
        body: { type: String, required: true },
        description: { type: String, required: false },
        image: { type: String, required: false },
        featured: { type: Boolean, required: false },
        comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
		timestamp: { type: String, required: false },
});

const CommentSchema = new mongoose.Schema({
        author: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
        post: [{type: Schema.Types.ObjectId, ref: 'Post', required: true}],
        text: { type: String, required: true },
        timestamp: {type: String, required: false}
});


```