import informationData from '../../data/informationData.json';
import './TheoryPage.css';

const SubtopicTheory = ({ subtopicId }) => {
    // Поиск подтемы во всех темах (плоский поиск)
    let currentSubtopic = null;

    informationData.forEach(topic => {
        const found = topic.subtopics.find(sub => sub.id == subtopicId);
        if (found) currentSubtopic = found;
    });

    const { title, text, images } = currentSubtopic;
    const hasImages = images && images.length > 0;

    return (
        <div className="subtopic-container">
            <h2 className="subtopic-page-title">{title}</h2>

            {/* Основной контейнер с динамическим классом */}
            <div className={`theory-layout ${hasImages ? 'has-media' : 'no-media'}`}>

                {/* Левая колонка: Текст */}
                <div className="theory-text">
                    {text.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Правая колонка: Картинки (только если есть) */}
                {hasImages && (
                    <aside className="theory-sidebar">
                        {images.map((img) => (
                            <figure key={img.id} className="theory-card">
                                <img src={img.url} alt={img.caption} loading="lazy" />
                                {img.caption && <figcaption>{img.caption}</figcaption>}
                            </figure>
                        ))}
                    </aside>
                )}

            </div>
        </div>
    );
};

export default SubtopicTheory;
