import 'package:flutter/material.dart';

class PostWidget extends StatelessWidget {
  final String authorName;
  final String authorProfileImageUrl;
  final String contentText;
  final List<String> imageUrls; // URLs of images to be displayed
  final VoidCallback onLikePressed;
  final VoidCallback onCommentPressed;

  const PostWidget({
    Key? key,
    required this.authorName,
    required this.authorProfileImageUrl,
    required this.contentText,
    required this.imageUrls,
    required this.onLikePressed,
    required this.onCommentPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 15),
      child: Padding(
        padding: const EdgeInsets.all(15),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Author Info
            Row(
              children: [
                CircleAvatar(
                  backgroundImage: NetworkImage('https://placehold.co/600x400'),
                  radius: 25,
                ),
                const SizedBox(width: 10),
                Text(
                  authorName,
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),

            // Post Content Text
            Text(
              contentText,
              style: const TextStyle(fontSize: 15),
            ),

            const SizedBox(height: 10),

            // Post Images or Attachments
            if (imageUrls.isNotEmpty)
              SizedBox(
                height: 200,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: imageUrls.length,
                  itemBuilder: (context, index) {
                    return Padding(
                      padding: const EdgeInsets.only(right: 10),
                      child: Image.network(
                        imageUrls[index],
                        fit: BoxFit.cover,
                        width: 150,
                      ),
                    );
                  },
                ),
              ),

            const Divider(),

            // Like and Comment Actions
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                TextButton.icon(
                  onPressed: onLikePressed,
                  icon: const Icon(Icons.thumb_up, color: Colors.blue),
                  label: const Text("Like"),
                ),
                TextButton.icon(
                  onPressed: onCommentPressed,
                  icon: const Icon(Icons.comment, color: Colors.blue),
                  label: const Text("Comment"),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
