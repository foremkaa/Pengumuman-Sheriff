import { useState, useRef } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  inputs: {
    label: string;
    key: string;
    placeholder?: string;
    type?: 'text' | 'number';
  }[];
  generateText: (values: Record<string, string>) => string;
}

export function TemplateCard({ title, inputs, generateText }: TemplateCardProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (key: string, value: string) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  const generatedText = generateText(values);

  const handleCopy = () => {
    try {
      // Fallback method using textarea selection
      if (textareaRef.current) {
        textareaRef.current.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700">
      {/* Header - Clickable */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-750 transition-colors rounded-t-lg"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>

      {/* Content - Collapsible */}
      {isExpanded && (
        <div className="px-6 pb-6">
          {/* Input Fields */}
          {inputs.length > 0 && (
            <div className="space-y-3 mb-4">
              {inputs.map(input => (
                <div key={input.key}>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    {input.label}
                  </label>
                  <input
                    type={input.type || 'text'}
                    value={values[input.key] || ''}
                    onChange={(e) => handleInputChange(input.key, e.target.value)}
                    placeholder={input.placeholder || '...'}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Result */}
          <div className="relative">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-600 min-h-[100px]">
              <textarea
                ref={textareaRef}
                value={generatedText}
                readOnly
                className="w-full bg-transparent text-green-400 font-mono text-sm whitespace-pre-wrap break-words resize-none outline-none border-none"
                rows={Math.max(3, generatedText.split('\n').length)}
              />
            </div>
            
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}