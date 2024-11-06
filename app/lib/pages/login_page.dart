import 'package:aluminiSuite/pages/signup_page.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool _isPasswordVisible = false;

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
                Navigator.of(context).pushReplacement(MaterialPageRoute(
                    builder: (context) => const SignupPage()));
              },
              child: Text(
                "Register",
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
            const Text("Sign In",
                style: TextStyle(fontSize: 36, fontWeight: FontWeight.w900)),
            const Spacer(flex: 1),
            const Text(
              "Welcome! Alumni and Hosts, please sign in to connect and engage with your community.",
              style: TextStyle(
                fontSize: 18,
              ),
            ),
            const Spacer(flex: 2),
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
            const Spacer(flex: 1),
            TextField(
              //   add placeholder
              //   add outline border
              //   add prefix icon.
              decoration: InputDecoration(
                prefixIcon: const Icon(Icons.lock),
                suffixIcon: IconButton(
                  icon: Icon(
                    _isPasswordVisible
                        ? Icons.visibility
                        : Icons.visibility_off,
                    color: Colors.grey,
                  ),
                  onPressed: () {
                    setState(() {
                      _isPasswordVisible =
                          !_isPasswordVisible; // Toggle password visibility
                    });
                  },
                ),
                hintText: "Enter Password",
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
              obscureText: !_isPasswordVisible,
            ),
            const Spacer(flex: 2),
            // Verify Button
            SizedBox(
              width: double.infinity,
              child: TextButton(
                onPressed: () {
                  //   TODO: Throw user to landing page/ dashboard and store token and other data to persistent store
                  print("Logged In");
                },
                style: ButtonStyle(
                  backgroundColor: WidgetStateProperty.all(
                    const Color.fromRGBO(252, 163, 17, 1),
                  ),
                ),
                child: const Text("Log In",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: FontWeight.w800)),
              ),
            ),
            const Spacer(flex: 4),
          ],
        ),
      )),
    );
  }
}
