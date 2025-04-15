type Props = {
    title: string;
    content: string;
  };
  
  export default function Card({ title, content }: Props) {
    return (
      <div className="bg-white rounded shadow px-6 py-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  }
  