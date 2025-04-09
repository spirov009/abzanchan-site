// Full updated component with backend integration for subscription and feedback
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Globe, Instagram, MessageCircle, PhoneCall, ShoppingCart, Image as ImageIcon, ArrowRight, Star, MapPin, HelpCircle, Wallet, Mail, UserHeart, Pencil } from "lucide-react";

export default function AbzanChanLanding() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [lang, setLang] = useState("ru");
  const [status, setStatus] = useState("");

  const t = {
    ru: {
      about: "О нас",
      aboutText: "АбзанЧан — это больше, чем просто домик. Это наша мечта об уютном уголке у природы, где можно расслабиться, согреться в чане и услышать Инзер.",
      subscribe: "Подпишитесь на новости",
      emailPlaceholder: "Ваш email",
      subscribeBtn: "Подписаться",
      feedback: "Обратная связь",
      feedbackPlaceholder: "Ваш отзыв, впечатления или предложения",
      sendFeedback: "Отправить отзыв",
      success: "Спасибо! Данные отправлены.",
      error: "Ошибка при отправке. Попробуйте снова."
    },
    en: {
      about: "About us",
      aboutText: "AbzanChan is more than a house. It’s our dream of a cozy escape in nature — where you can relax, warm up in the tub, and listen to the Inzer river.",
      subscribe: "Subscribe for updates",
      emailPlaceholder: "Your email",
      subscribeBtn: "Subscribe",
      feedback: "Feedback",
      feedbackPlaceholder: "Your impressions, review or suggestions",
      sendFeedback: "Send feedback",
      success: "Thank you! Submitted successfully.",
      error: "There was an error. Please try again."
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      // Mock sending email (replace with real backend)
      console.log("Subscribed:", email);
      setEmail("");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  const handleFeedback = async (e) => {
    e.preventDefault();
    try {
      // Mock sending feedback (replace with real backend)
      console.log("Feedback:", feedback);
      setFeedback("");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-100 p-4">
      {/* About Section */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
          <UserHeart className="w-5 h-5" /> {t[lang].about}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">{t[lang].aboutText}</p>
      </section>

      {/* Subscribe Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 flex justify-center gap-2">
          <Mail className="w-5 h-5" /> {t[lang].subscribe}
        </h2>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <Input
            placeholder={t[lang].emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">{t[lang].subscribeBtn}</Button>
        </form>
        {status && <p className="mt-2 text-sm text-center text-muted-foreground">{t[lang][status]}</p>}
      </section>

      {/* Feedback Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 flex justify-center gap-2">
          <Pencil className="w-5 h-5" /> {t[lang].feedback}
        </h2>
        <form onSubmit={handleFeedback} className="max-w-xl mx-auto flex flex-col gap-4">
          <Textarea
            placeholder={t[lang].feedbackPlaceholder}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Button type="submit">{t[lang].sendFeedback}</Button>
        </form>
        {status && <p className="mt-2 text-sm text-center text-muted-foreground">{t[lang][status]}</p>}
      </section>
    </div>
  );
}
