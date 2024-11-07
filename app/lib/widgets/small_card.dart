import 'package:flutter/material.dart';

class SmallCard extends StatelessWidget {
  final Icon iconData;
  final String cardTitle;

  const SmallCard({super.key, required this.iconData, required this.cardTitle});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 120,
      width: 150,
      decoration: BoxDecoration(
        border: Border.all(color: Colors.black),
        borderRadius: BorderRadius.circular(8.0),
        color: Colors.white,
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          iconData,
          const SizedBox(height: 8),
          Text(
            cardTitle,
            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }
}
