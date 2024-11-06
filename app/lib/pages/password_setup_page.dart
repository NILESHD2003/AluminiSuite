import 'package:flutter/material.dart';

class PasswordSetPage extends StatefulWidget {
  const PasswordSetPage({super.key});

  @override
  State<PasswordSetPage> createState() => _PasswordSetPageState();
}

class _PasswordSetPageState extends State<PasswordSetPage> {
  bool _isPasswordVisible = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        leading: IconButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          icon:
              const Icon(Icons.arrow_back_ios_new_outlined, color: Colors.grey),
        ),
      ),
      body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Spacer(flex: 4),
              const Text("Set Password",
                  style: TextStyle(fontSize: 36, fontWeight: FontWeight.w900)),
              const Spacer(flex: 1),
              const Text("Set up password to access the account",
                  style: TextStyle(fontSize: 18)),
              const Spacer(flex: 2),
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
                  hintText: "Confirm Password",
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
              SizedBox(
                width: double.infinity,
                child: TextButton(
                  onPressed: () {
                    //   TODO: Throw user to landing page/ dashboard and store token and other data to persistent store
                    print("Signup Complete");
                  },
                  style: ButtonStyle(
                    backgroundColor: WidgetStateProperty.all(
                        const Color.fromRGBO(252, 163, 17, 1)),
                  ),
                  child: const Text("Complete Signup",
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 18,
                          fontWeight: FontWeight.w800)),
                ),
              ),
              const Spacer(flex: 4)
            ],
          )),
    );
  }
}
