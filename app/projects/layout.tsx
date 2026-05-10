/** Cette composante est utilisée pour envelopper toutes les pages du projet. 
 * Elle permet de définir une structure commune, comme un fond ou une mise en page, pour toutes les pages de projet.
*/
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}