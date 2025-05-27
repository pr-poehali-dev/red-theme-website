import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

const Index = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() && content.trim()) {
      const newNote: Note = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date(),
      };
      setNotes([newNote, ...notes]);
      setTitle("");
      setContent("");
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"></div>
        <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-white font-montserrat lg:text-6xl">
              Красный
              <span className="block text-red-200">Блокнот</span>
            </h1>
            <p className="mt-6 text-xl text-red-100 max-w-3xl mx-auto">
              Создавайте и управляйте своими записями в стильном красном
              интерфейсе. Простой и удобный блокнот для ваших идей.
            </p>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-12 px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        {/* Add Note Form */}
        <Card className="mb-8 border-red-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-red-700 font-montserrat">
              Добавить новую запись
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Заголовок записи..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-red-200 focus:ring-red-500"
            />
            <Textarea
              placeholder="Содержание записи..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] border-red-200 focus:ring-red-500"
            />
            <Button
              onClick={addNote}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              disabled={!title.trim() || !content.trim()}
            >
              ✍️ Создать запись
            </Button>
          </CardContent>
        </Card>

        {/* Notes List */}
        <div className="space-y-4">
          {notes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">📝 Записей пока нет</p>
              <p className="text-gray-400 mt-2">Создайте первую запись выше</p>
            </div>
          ) : (
            notes.map((note) => (
              <Card
                key={note.id}
                className="border-red-100 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-gray-900 font-montserrat">
                      {note.title}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteNote(note.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      🗑️
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    {note.createdAt.toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {note.content}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="text-center px-4 mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold mb-4 font-montserrat text-red-400">
            Красный блокнот
          </h3>
          <p className="text-gray-400 mb-8">Создано с ❤️ и красными красками</p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© 2025 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
