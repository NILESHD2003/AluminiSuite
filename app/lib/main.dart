import 'package:flutter/material.dart';
import 'package:aluminiSuite/pages/splash_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(
            seedColor: const Color.fromRGBO(252, 163, 17, 1),
          ),
          primaryColor: const Color.fromRGBO(252, 163, 17, 1),
          useMaterial3: true,
          fontFamily: 'Poppins'
        ),
        home: const SplashPage(),
        // home: const WelcomePage(),
        );
  }
}
