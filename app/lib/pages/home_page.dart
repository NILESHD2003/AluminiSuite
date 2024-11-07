import 'package:aluminiSuite/pages/chat_page.dart';
import 'package:aluminiSuite/pages/more_page.dart';
import 'package:aluminiSuite/pages/post_page.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int currentPage = 0;
  List<Widget> pages = const [PostPage(), MorePage(), ChatPage()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(),
      // drawer: Drawer(
      //     child: Padding(
      //   padding: EdgeInsets.symmetric(vertical: 40, horizontal: 20),
      //   child: Column(
      //     mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //     crossAxisAlignment: CrossAxisAlignment.start,
      //     children: [
      //       Container(
      //         child: Text('Hello, Nilesh', style: TextStyle(fontSize: 28)),
      //       ),
      //       const Divider(),
      //       Container(
      //         child: Column(
      //           crossAxisAlignment: CrossAxisAlignment.start,
      //           children: [
      //             Text('Explore', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
      //             ListTile(
      //               title: Text('Events', style: TextStyle(fontSize: 16)),
      //             ),
      //             ListTile(
      //               title: Text('Job Boards', style: TextStyle(fontSize: 16)),
      //             ),
      //             ListTile(
      //               title: Text('Events', style: TextStyle(fontSize: 16)),
      //             ),
      //             ListTile(
      //               title: Text('Events', style: TextStyle(fontSize: 16)),
      //             )
      //           ],
      //         ),
      //       ),
      //       const Divider(),
      //       Container(
      //         child: Column(
      //           crossAxisAlignment: CrossAxisAlignment.start,
      //           children: [
      //             Text('Switch Communities', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
      //             ListTile(
      //               title: Text('Community 1', style: TextStyle(fontSize: 16)),
      //             ),
      //             ListTile(
      //               title: Text('Community 2', style: TextStyle(fontSize: 16)),
      //             ),
      //             ListTile(
      //               title: Text('Community 3', style: TextStyle(fontSize: 16)),
      //             )
      //           ],
      //         ),
      //       ),
      //       const Divider(),
      //       Container(
      //         child: Column(
      //           children: [
      //             ListTile(
      //               title: Text('Settings',
      //                   style:
      //                       TextStyle(fontSize: 20, color: Colors.blueAccent)),
      //             ),
      //             ListTile(
      //               title: Text('Log Out',
      //                   style: TextStyle(fontSize: 20, color: Colors.red)),
      //             )
      //           ],
      //         ),
      //       )
      //     ],
      //   ),
      // )),
      body: SafeArea(
        child: IndexedStack(
          index: currentPage,
          children: pages,
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
          onTap: (value) {
            setState(() {
              currentPage = value;
            });
          },
          items: const [
            BottomNavigationBarItem(icon: Icon(Icons.article,), label: 'Post',),
            BottomNavigationBarItem(icon: Icon(Icons.more_horiz_outlined), label: 'More'),
            BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat')
          ]),
    );
  }
}
