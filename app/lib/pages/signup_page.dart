import 'package:aluminiSuite/pages/otp_page.dart';
import 'package:flutter/material.dart';

import 'login_page.dart';

class SignupPage extends StatefulWidget {
  const SignupPage({super.key});

  @override
  State<SignupPage> createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        // backgroundColor: Colors.transparent,
        elevation: 0,
        actions: [
          TextButton(
              onPressed: () {
                Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (context) => const LoginPage()));
              },
              child: Text(
                "Sign In",
                style: TextStyle(color: Theme.of(context).primaryColor),
              ))
        ],
      ),
      body: SafeArea(
          child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Spacer(flex: 2),
            const Text("Sign Up",
                style: TextStyle(fontSize: 36, fontWeight: FontWeight.w900)),
            const Spacer(flex: 1),
            const Text(
              "Sign up to the platform to experience exclusive features designed for organizations.",
              style: TextStyle(
                fontSize: 18,
              ),
            ),
            const Spacer(flex: 2),
            // Name Field
            TextField(
              //   add placeholder
              //   add outline border
              //   add prefix icon.
              decoration: InputDecoration(
                prefixIcon: const Icon(Icons.perm_identity_rounded),
                hintText: "Enter your Name",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Colors.grey),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide:
                      const BorderSide(color: Color.fromRGBO(252, 163, 17, 1)),
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Colors.grey),
                ),
              ),
              //   add obscure text for password fields
            ),
            // Email Field
            const Spacer(flex: 1),
            TextField(
              //   add placeholder
              //   add outline border
              //   add prefix icon.
              decoration: InputDecoration(
                prefixIcon: const Icon(Icons.email_outlined),
                hintText: "Enter your Email",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Colors.grey),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide:
                      const BorderSide(color: Color.fromRGBO(252, 163, 17, 1)),
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Colors.grey),
                ),
              ),
              //   add obscure text for password fields
            ),
            // Phone Number Field
            const Spacer(flex: 1),
            TextField(
              //   add placeholder
              //   add outline border
              //   add prefix icon.
              decoration: InputDecoration(
                prefixIcon: const Icon(Icons.phone),
                hintText: "Enter your Phone Number",
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Colors.grey),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Colors.black),
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: const BorderSide(color: Colors.grey),
                ),
              ),
              //   add obscure text for password fields
            ),
            const Spacer(flex: 4),
            // Verify Button
            SizedBox(
              width: double.infinity,
              child: TextButton(
                onPressed: () {
                  Navigator.of(context).push(
                      MaterialPageRoute(builder: (context) => const OtpPage()));
                },
                style: ButtonStyle(
                  backgroundColor: WidgetStateProperty.all(
                    const Color.fromRGBO(252, 163, 17, 1),
                  ),
                ),
                child: const Text("Continue",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: FontWeight.w800)),
              ),
            ),
            const Spacer(flex: 1),
          ],
        ),
      )),
    );
  }
}
