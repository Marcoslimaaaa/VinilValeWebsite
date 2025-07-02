import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { Send, Lock, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      servico: "vinil" as const,
      mensagem: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      return apiRequest("POST", "/api/leads", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Sucesso!",
        description: result.message,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: error.message || "Erro ao enviar orçamento. Tente novamente.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertLead) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 11) {
      return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (cleaned.length >= 7) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (cleaned.length >= 3) {
      return cleaned.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    }
    return cleaned;
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-vinyl-blue-50 to-vinyl-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Solicite Agora Seu{" "}
              <span className="vinyl-blue-500">Orçamento Personalizado!</span>
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              <strong>Não perca tempo! Fale com a gente e transforme sua piscina hoje!</strong>
            </p>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e receba seu orçamento em até 24 horas, sem compromisso!
            </p>
          </div>

          <Card className="bg-white rounded-2xl shadow-xl">
            <CardContent className="p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Nome Completo *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            E-mail *
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Telefone *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(11) 99999-9999"
                              {...field}
                              onChange={(e) => {
                                const formatted = formatPhone(e.target.value);
                                field.onChange(formatted);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="servico"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            Tipo de Serviço *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o serviço" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="vinil">Revestimento em Vinil</SelectItem>
                              <SelectItem value="capa-protecao">Capa de Proteção</SelectItem>
                              <SelectItem value="capa-termica">Capa Térmica</SelectItem>
                              <SelectItem value="completo">Solução Completa</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">
                          Mensagem (Opcional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-nos mais sobre seu projeto..."
                            rows={4}
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-vinyl-teal-500 hover:bg-vinyl-teal-600 text-white font-semibold text-lg px-10 py-4 w-full md:w-auto"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Enviando..." : "Enviar Meu Orçamento"}
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                      <Lock className="w-4 h-4 inline mr-1" />
                      Seus dados estão seguros conosco
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="mt-12 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="w-5 h-5 vinyl-blue-500 mr-2" />
                <span className="font-medium text-gray-700">(13) 997305949</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 vinyl-blue-500 mr-2" />
                <span className="font-medium text-gray-700">vinilvale@hotmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 vinyl-blue-500 mr-2" />
                <span className="font-medium text-gray-700">Registro, SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
