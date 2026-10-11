import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.redirect("/signIn"));
router.get("/signIn", (req, res) => res.render("signIn"));
router.get("/signUp", (req, res) => res.render("signUp"));
router.get("/dashboard", (req, res) => res.render("dashboard"));
router.get("/exhibit/:id", (req, res) => res.render("exhibitDetail", { exhibitId: req.params.id }));
router.get("/admin/dashboard", (req, res) => res.render("adminDashboard"));
router.get("/profile", (req, res) => res.render("profile"));
router.get("/403", (req, res) => res.render("403"));
router.get("*", (req, res) => res.render("404"));

export default router;
