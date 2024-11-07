import 'package:flutter/material.dart';

import '../widgets/post_widget.dart';

// Your PostWidget class here

class PostPage extends StatefulWidget {
  const PostPage({super.key});

  @override
  State<PostPage> createState() => _PostPageState();
}

class _PostPageState extends State<PostPage> {
  void _showSwitchHostsDialog() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Switch Hosts'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              ListTile(
                leading: const Icon(Icons.account_circle),
                title: const Text('Host 1'),
                onTap: () {
                  // Perform action for Host 1
                  Navigator.of(context).pop();
                  print('Switched to Host 1');
                },
              ),
              ListTile(
                leading: const Icon(Icons.account_circle),
                title: const Text('Host 2'),
                onTap: () {
                  // Perform action for Host 2
                  Navigator.of(context).pop();
                  print('Switched to Host 2');
                },
              ),
              // Add more ListTile widgets for additional hosts if needed
            ],
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Close the dialog
              },
              child: const Text('Cancel'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('Explore'),
        elevation: 0,
        actions: [
          IconButton(
            onPressed: _showSwitchHostsDialog,
            icon: const Icon(Icons.switch_account),
            tooltip: 'Switch Hosts',
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(10),
        child: Column(
          children: [
            PostWidget(
              authorName: 'John Doe',
              authorProfileImageUrl: 'https://example.com/profile.jpg',
              contentText: 'This is a sample post content. Check out these pictures!',
              imageUrls: [
                'https://example.com/image1.jpg',
                'https://example.com/image2.jpg',
              ],
              onLikePressed: () {
                // Handle like action
                print('Liked the post');
              },
              onCommentPressed: () {
                // Handle comment action
                print('Commented on the post');
              },
            ),
            const SizedBox(height: 10), // Additional space between posts
            // Add more PostWidgets as needed
            PostWidget(
              authorName: 'Jane Smith',
              authorProfileImageUrl: 'https://example.com/profile2.jpg',
              contentText: 'Here is another post example with one image attachment!',
              imageUrls: [
                'https://example.com/image3.jpg',
              ],
              onLikePressed: () {
                print('Liked the post');
              },
              onCommentPressed: () {
                print('Commented on the post');
              },
            ),
          ],
        ),
      ),
    );
  }
}
