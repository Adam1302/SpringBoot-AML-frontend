
class BookFieldConstants {
    static readonly workTitleField = 'work_title'
    static readonly primaryAuthorField = 'primary_author'
    static readonly yearPublishedField = 'year_published'
    static readonly wordCountField = 'word_count'
    static readonly pictureIDField = 'picture_id'
    static readonly createdAtField = 'created_at'
    static readonly updatedAtField = 'updated_at'
    static readonly genresField = 'genres'

    static readonly fieldList = ['work_title', 'primary_author', 'year_published', 'word_count', 'picture_id', 'created_at', 'updated_at', 'genres']

    static readonly fieldMap = new Map<string, string>([
        ["work_title", "Work Title"],
        ["primary_author", "Primary Author"],
        ["word_count", "Word Count"],
        ["year_published", "Year Published"],
        ["created_at", "Date Added"]
    ]);
}

export default BookFieldConstants;
