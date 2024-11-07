import 'package:aluminiSuite/widgets/small_card.dart';
import 'package:flutter/material.dart';

class MorePage extends StatefulWidget {
  const MorePage({super.key});

  @override
  State<MorePage> createState() => _MorePageState();
}

class _MorePageState extends State<MorePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('More'),
        elevation: 0,
        automaticallyImplyLeading: false,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            children: [
              Card(
                elevation: 6,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Container(
                  height: 200,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: Theme.of(context).primaryColor,
                    border: Border.all(color: Colors.black, width: 1),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 20, horizontal: 20),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        const SizedBox(
                          width: 120,
                          height: 140,
                          child: Placeholder(),
                        ),
                        Column(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            const Column(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                Text(
                                  'Nilesh',
                                  style: TextStyle(fontSize: 24),
                                ),
                                Text(
                                  'Deshpande',
                                  style: TextStyle(fontSize: 24),
                                ),
                              ],
                            ),
                            TextButton(
                              onPressed: () {},
                              style: ButtonStyle(
                                backgroundColor: MaterialStateProperty.all(Colors.white),
                              ),
                              child: const Text(
                                "Profile",
                                style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 18,
                                    fontWeight: FontWeight.w800),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              const Text(
                'Features',
                style: TextStyle(fontSize: 24),
              ),
              const SizedBox(height: 20),
              Wrap(
                spacing: 20,
                runSpacing: 20,
                children: [
                  SmallCard(
                    iconData: const Icon(Icons.event, size: 40, color: Colors.black),
                    cardTitle: 'Events',
                  ),
                  SmallCard(
                    iconData: const Icon(Icons.work, size: 40, color: Colors.black),
                    cardTitle: 'Job Posting',
                  ),
                  SmallCard(
                    iconData: const Icon(Icons.people, size: 40, color: Colors.black),
                    cardTitle: 'Networking',
                  ),
                  SmallCard(
                    iconData: const Icon(Icons.favorite, size: 40, color: Colors.black),
                    cardTitle: 'Donations',
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
