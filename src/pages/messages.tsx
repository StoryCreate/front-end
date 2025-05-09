import React, { useState, useEffect, useCallback } from "react";
import { Search, Send, Circle } from "lucide-react";
import { fetchMessages, searchMessages, sendMessage, Message, Conversation } from "../services/messagesService";

export const Messages = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadConversations = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMessages();
      setConversations(data);
      if (data.length > 0) {
        setSelectedConversation(data[0]);
      }
    } catch (err) {
      setError("Failed to load messages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConversations();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(async () => {
      if (value.trim() === "") {
        loadConversations();
      } else {
        setLoading(true);
        setError(null);
        try {
          const results = await searchMessages(value);
          setConversations(results);
          if (results.length > 0) {
            setSelectedConversation(results[0]);
          } else {
            setSelectedConversation(null);
          }
        } catch (err) {
          setError("Search failed.");
        } finally {
          setLoading(false);
        }
      }
    }, 500);

    setSearchTimeout(timeout);
  };

  const handleSendMessage = async () => {
    if (!selectedConversation || messageInput.trim() === "") return;
    setLoading(true);
    setError(null);
    try {
      const newMessage = await sendMessage(selectedConversation.id, messageInput.trim());
      // Update conversations with new message
      const updatedConversations = conversations.map((conv) => {
        if (conv.id === selectedConversation.id) {
          return {
            ...conv,
            lastMessage: newMessage,
          };
        }
        return conv;
      });
      setConversations(updatedConversations);
      setMessageInput("");
    } catch (err) {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-padding flex flex-col lg:flex-row h-full bg-white mb-8">
      <div className="flex flex-col w-full max-w-7xl mx-auto p-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center w-full max-w-md border border-solid border-gray-300 rounded-full px-3 py-2">
              <input
                type="text"
                className="flex-grow outline-none font-normal text-gray-700 placeholder-gray-400 p-1"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="w-4 h-4 ml-2 text-gray-500" />
            </div>
          </div>
          <div className="space-y-8 overflow-y-auto max-h-[70vh] mt-6">
            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {!loading && !error && conversations.length === 0 && <div>No messages found.</div>}
            {!loading && !error && conversations.map((conv) => (
              <div
                key={conv.id}
                className={`flex items-center space-x-16 cursor-pointer ${selectedConversation?.id === conv.id ? "bg-gray-200" : ""}`}
                onClick={() => setSelectedConversation(conv)}
              >
                <div className="relative">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={conv.participants[0]?.avatar || ""}
                    alt={conv.participants[0]?.name || "User"}
                  />
                  <Circle
                    className={`absolute bottom-0 right-0 w-4 h-4 ${conv.lastMessage.isRead ? "text-green-500" : "text-gray-400"}`}
                  />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-left text-gray-900">{conv.participants[0]?.name}</div>
                    <div className="text-xs text-gray-500 pr-6">{new Date(conv.lastMessage.timestamp).toLocaleTimeString()}</div>
                  </div>
                  <div className="text-sm text-left text-gray-600">Fiction Book</div>
                  <p className="text-sm text-left text-gray-700 truncate">{conv.lastMessage.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        {selectedConversation ? (
          <>
            <div className="flex flex-col w-full max-w-7xl mx-auto p-4 border-t border-gray-200 overflow-y-auto max-h-[70vh]">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto p-4 border-t border-gray-200">
                  <div className="flex flex-col gap-2 text-left">
                    <div className="font-semibold text-gray-900">{selectedConversation.participants[0]?.name}</div>
                    <div className="text-xs text-gray-500">{new Date(selectedConversation.lastMessage.timestamp).toLocaleString()}</div>
                    <p className="text-sm text-gray-700">{selectedConversation.lastMessage.content}</p>
                  </div>
                  <div>
                    <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-purple-950 transition cursor-pointer">
                      Contract
                    </button>
                  </div>
                </div>

                {/* Messages list */}
                {selectedConversation.lastMessage && (
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src={selectedConversation.participants[0]?.avatar || ""}
                        alt={selectedConversation.participants[0]?.name || "User"}
                      />
                      <Circle className="absolute bottom-0 right-0 w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex flex-col flex-grow text-left bg-gray-100 rounded-lg p-4">
                      <div className="font-semibold text-gray-900 pb-2">{selectedConversation.participants[0]?.name}</div>
                      <p className="text-gray-700 text-sm whitespace-pre-line">{selectedConversation.lastMessage.content}</p>
                      <div className="text-xs text-gray-500 mt-2">{new Date(selectedConversation.lastMessage.timestamp).toLocaleTimeString()}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start w-full max-w-7xl mx-auto p-4 border-t border-gray-200">
              <div className="flex justify-between w-full">
                <textarea
                  className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Type a message ..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <Send
                  className="w-6 h-6 ml-3 cursor-pointer text-gray-600"
                  onClick={handleSendMessage}
                />
              </div>
              <div>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer">
                  Attach
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col flex-grow justify-center items-center text-gray-500">
            No conversation selected.
          </div>
        )}
      </div>
    </div>
  );
};
