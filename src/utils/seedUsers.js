import userRepository from "../repositories/UserRepository.js";
import authService from "../services/AuthService.js";

export default async function seedUsers() {
  const existing = await userRepository.findByEmail("admin@admin.com");
  if (!existing) {
    try {
      await authService.signUp({
        email: "admin@admin.com",
        password: "Password123@", // Cumple las condiciones de regex
        name: "Admin",
        lastName: "Master",
        phoneNumber: "123456789",
        birthdate: "2000-01-01",
        url_profile: "https://via.placeholder.com/150",
        address: "Admin Address 123",
        roles: ["admin"]
      });
      console.log("Seeded default admin user: admin@admin.com / Password123@");
    } catch (err) {
      console.error("Error seeding default admin:", err.message);
    }
  }
}
