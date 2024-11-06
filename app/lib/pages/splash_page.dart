import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:aluminiSuite/pages/welcome_page.dart'; // Ensure you import your WelcomePage

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  _SplashPageState createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();

    // Show a Snackbar for loading experience
    WidgetsBinding.instance.addPostFrameCallback((_) {
      const snackBar =
          SnackBar(content: Text('Please Wait! Loading Experience...'));
      ScaffoldMessenger.of(context).showSnackBar(snackBar);
    });

    // Start a delayed navigation to WelcomePage
    Future.delayed(const Duration(seconds: 3), () {
      // Navigate to WelcomePage
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(
          builder: (context) => const WelcomePage(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(elevation: 0),
      body: Center(
        child: RichText(
          text: TextSpan(
            children: [
              TextSpan(
                text: 'Alumni',
                style: GoogleFonts.pacifico(
                  color: const Color.fromRGBO(20, 33, 61, 1),
                  fontSize: 48,
                  fontWeight: FontWeight.normal,
                ),
              ),
              TextSpan(
                text: 'Suite',
                style: GoogleFonts.pacifico(
                  color: Theme.of(context).primaryColor,
                  fontSize: 48,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
