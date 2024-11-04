import 'package:aluminiSuite/pages/password_setup_page.dart';
import 'package:flutter/material.dart';

class OtpPage extends StatefulWidget {
  const OtpPage({super.key});

  @override
  State<OtpPage> createState() => _OtpPageState();
}

class _OtpPageState extends State<OtpPage> {
  final List<TextEditingController> _controllers =
      List.generate(4, (index) => TextEditingController());

  @override
  void dispose() {
    for (var controller in _controllers) {
      controller.dispose();
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        leading: IconButton(
          onPressed: () {
            Navigator.of(context).pop();
          },
          icon: const Icon(Icons.arrow_back_ios_new_outlined),
        ),
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Spacer(flex: 4),
              const Text("OTP Sent!",
                  style: TextStyle(fontSize: 36, fontWeight: FontWeight.w900)),
              const Spacer(flex: 1),
              const Text("Enter the 4-character code sent to you at",
                  style: TextStyle(fontSize: 18)),
              Text("example@example.com",
                  style: TextStyle(
                      fontSize: 18, color: Theme.of(context).primaryColor)),
              const Spacer(flex: 2),
              SizedBox(
                width: double.infinity,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: List.generate(4, (index) {
                    return _buildOtpBox(index);
                  }),
                ),
              ),
              const Spacer(flex: 2),
              SizedBox(
                width: double.infinity,
                child: TextButton(
                  onPressed: () {
                    //   TODO: make API call to verify OTP.
                    Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const PasswordSetPage(),
                    ));
                  },
                  style: ButtonStyle(
                    backgroundColor: WidgetStateProperty.all(
                        const Color.fromRGBO(252, 163, 17, 1)),
                  ),
                  child: const Text("Verify",
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 18,
                          fontWeight: FontWeight.w800)),
                ),
              ),
              const Spacer(flex: 2),
              TextButton(
                onPressed: () {
                  // Implement resend OTP logic here
                },
                child: const Text(
                  "Didn't Receive Code?",
                  style: TextStyle(color: Colors.black, fontSize: 16),
                ),
              ),
              const Spacer(flex: 4),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildOtpBox(int index) {
    return SizedBox(
      width: 50,
      height: 50,
      child: TextField(
        controller: _controllers[index],
        keyboardType: TextInputType.text,
        textAlign: TextAlign.center,
        maxLength: 1,
        textCapitalization: TextCapitalization.characters,
        decoration: const InputDecoration(
          counterText: "",
          border: OutlineInputBorder(),
          contentPadding: EdgeInsets.all(10),
        ),
        onChanged: (value) {
          if (value.isNotEmpty && index < 3) {
            FocusScope.of(context).nextFocus();
          } else if (value.isEmpty && index > 0) {
            FocusScope.of(context).previousFocus();
          }
        },
      ),
    );
  }
}
