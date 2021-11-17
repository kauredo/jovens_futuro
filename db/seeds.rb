require 'faker'

if Rails.env.development? || Rails.env.staging?
  def generate_html(_title)
    first = "<div>#{Faker::Lorem.paragraph(sentence_count: rand(20..40))}</div><br/><br/>"
    block = "<blockquote><h1>#{Faker::Lorem.paragraph(sentence_count: rand(5..10))}</h1></blockquote><br/><br/>" 
    images = []
    # rand(0..3).times do
    #   images << "<action-text-attachment content-type=\"image/png\" url=\"#{Faker::LoremFlickr.image(size: "300x300", search_terms: [title.split(' ').first])}\" filename=\"#{title.split(' ').first}.png\" filesize=\"723478\" width=\"300\" height=\"300\" presentation=\"gallery\"></action-text-attachment>"
    # end
    last = "<div>#{Faker::Lorem.paragraph(sentence_count: rand(15..30))}</div><br/>"

    first + block + images.join + last
  end

  Artigo.destroy_all
  Colaborator.destroy_all

  4.times do
    colaborator = Colaborator.new
    colaborator.name = Faker::FunnyName.unique.name
    colaborator.remote_avatar_url = Faker::LoremFlickr.image(size: "300x300", search_terms: ['person', 'headshot'], match_all: true)
    colaborator.description = "Famous for saying: '#{Faker::TvShows::FamilyGuy.quote}' and '#{Faker::TvShows::RickAndMorty.quote}'"
    colaborator.save

    puts "Created colaborator #{colaborator.name}"
  end

  colaborators = Colaborator.all

  15.times do
    artigo = Artigo.new
    artigo.title = "#{Faker::Educator.subject} - #{Faker::Quote.famous_last_words}"
    artigo.published = true
    artigo.published_at = Faker::Time.between(from: DateTime.now - 1.month, to: DateTime.now)
    artigo.categoria = Artigo::CATEGORIAS.sample
    artigo.has_slider = [true, false].sample
    artigo.contents = generate_html(artigo.title)

    artigo.save
    puts "Created artigo #{artigo.title}"

    rand(1..colaborators.size).times do
      artigos_colaborator = ArtigosColaborator.new
      artigos_colaborator.artigo = artigo
      artigos_colaborator.colaborator = colaborators.sample

      next if ArtigosColaborator.where(artigo: artigo, colaborator: artigos_colaborator.colaborator).present?

      artigos_colaborator.save
    end

    rand(1..10).times do
      next if rand(1..20) < 15

      comment = Comment.new
      comment.artigo = artigo
      comment.name = Faker::Name.name
      comment.email = Faker::Internet.email
      comment.comment = Faker::Lorem.paragraph(sentence_count: rand(1..10))
      comment.save

      if rand(1..20) > 14
        rand(1..4).times do
          reply = Comment.new
          reply.parent = comment
          reply.artigo = artigo
          reply.name = Faker::Name.name
          reply.email = Faker::Internet.email
          reply.comment = Faker::Lorem.paragraph(sentence_count: rand(1..10))
          reply.save
        end
      end
    end
  end
end
