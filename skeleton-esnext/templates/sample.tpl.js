const greeting = '{{{GREETING}}}'; // you would replace {{{GREETING}}} with the var from your dotenv file using gulp

export default function(name = 'ricky') {
  return greeting + name;
}
