import 'package:aluminiSuite/pages/signup_page.dart';
import 'package:flutter/material.dart';
import 'package:aluminiSuite/pages/login_page.dart';

final data = [
  {
    "img": 'assets/images/jobBoard.jpg',
    "title": "Job Board",
    "desc": "Find your dream job"
  },
  {
    "img": 'assets/images/mentoring.jpg',
    "title": "Mentoring",
    "desc": "Get expert advice"
  },
  {
    "img": 'assets/images/aiRecommendation.jpg',
    "title": "AI Recommendations",
    "desc": "Smart suggestions for you"
  },
  {
    "img": 'assets/images/eventCoordination.jpg',
    "title": "Event Coordination",
    "desc": "Plan and manage events"
  },
  {
    "img": 'assets/images/seamlessNetworking.jpg',
    "title": "Seamless Networking",
    "desc": "Connect with others effortlessly"
  },
  {
    "img": 'assets/images/welcome.jpg',
    "title": "Welcome",
    "desc": "Join us in our journey"
  },
];

class WelcomePage extends StatefulWidget {
  const WelcomePage({super.key});

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  int index = 0; // Initialize index here

  void nextPage() {
    setState(() {
      if (index < data.length - 1) {
        index++; // Increment index
      } else {
        // TODO: Navigate to Sign Up page
        print("Navigate to Sign Up page");
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        actions: [
          TextButton(
            onPressed: () {
              // TODO: Navigate to Login
              Navigator.of(context).pushReplacement(
                  MaterialPageRoute(builder: (context) => const LoginPage()));
            },
            child: const Text(
              'Skip',
              style: TextStyle(
                color: Color.fromRGBO(252, 163, 17, 1),
              ),
            ),
          ),
        ],
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            children: [
              const Spacer(flex: 2),
              // Image goes here
              SizedBox(
                height: 300,
                width: double.infinity,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Image.asset(
                    data[index]['img'] as String,
                    fit: BoxFit.fill,
                  ),
                ),
              ),
              const Spacer(flex: 2),
              // Rotating dots go here
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(data.length, (i) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4.0),
                    child: Icon(
                      Icons.circle_rounded,
                      size: i == index ? 12 : 8,
                      color: i == index
                          ? const Color.fromRGBO(252, 163, 17, 1)
                          : Colors.grey,
                    ),
                  );
                }),
              ),
              const Spacer(flex: 2),
              // Text goes here
              Column(
                children: [
                  Text(
                    data[index]['title'] as String,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Theme.of(context).primaryColor,
                      fontSize: 32,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    data[index]['desc'] as String,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 16),
                  ),
                ],
              ),
              const Spacer(flex: 2),
              SizedBox(
                width: double.infinity,
                child: TextButton(
                  style: ButtonStyle(
                    backgroundColor: WidgetStateProperty.all(
                      const Color.fromRGBO(252, 163, 17, 1),
                    ),
                  ),
                  onPressed: () {
                    if (index < data.length - 1) {
                      nextPage(); // Call nextPage function
                    } else {
                      // TODO: Navigate to Sign Up page
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                          builder: (context) => const SignupPage()));
                    }
                  },
                  child: Text(
                    index < data.length - 1 ? 'Next' : 'Sign Up',
                    // Change button text
                    style: const TextStyle(color: Colors.white),
                  ),
                ),
              ),
              const Spacer(flex: 4),
            ],
          ),
        ),
      ),
    );
  }
}
