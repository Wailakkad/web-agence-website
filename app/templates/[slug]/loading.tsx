export default function TemplateLoading() {
  return (
    <div className="py-16 px-6 md:px-20 animate-pulse">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-4 text-left">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-12 bg-gray-200 rounded w-3/4" />
          <div className="h-12 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
          <div className="h-12 bg-gray-200 rounded w-44 mt-8" />
        </div>
        <div className="lg:col-span-2 h-80 bg-gray-200 rounded-2xl" />
      </div>
    </div>
  );
}
