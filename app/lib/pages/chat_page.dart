import 'package:flutter/material.dart';

class ChatPage extends StatefulWidget {
  const ChatPage({super.key});

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Chats'),
        elevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: SingleChildScrollView(
        child: SafeArea(
          child: Column(
            children: [
              // Add your chat list or other content here
              Container(
                height: 600, // Example height for scrollable content
                color: Colors.grey[200], // Placeholder for chat content
              ),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          // Define the action when button is pressed
          print('New chat button pressed');
        },
        label: const Text('New'), // Text label
        icon: const Icon(Icons.add), // Leading icon
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat, // Fixed to bottom right
    );
  }
}
