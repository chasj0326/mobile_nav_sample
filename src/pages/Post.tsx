import { NavButton } from '../navigation';
import { Container } from './Home';
import styled from '@emotion/styled';

const Post = () => {
  return (
    <Container>
      <h3>포스트 페이지 입니다</h3>
      <NavButton
        destination='Edit'
        shape='rectangle'
        buttonColor='#969696'>
        Edit
      </NavButton>
      <div>
        Ut mel autem partem. Ne mundi aliquam eos, eam an
        reque ponderum, clita tation cu vis. Ei eros
        fastidii usu.{' '}
        <MarkPrimary>
          Pri modus pericula definitiones ad, per omnium
          viderer an, sed dolor nonumy molestiae an. Erat
          nonumes id mei, no vix vitae homero nominati.
        </MarkPrimary>{' '}
        Mea dicat facilis epicurei ei, eu sea affert
        periculis dissentiet, nisl falli postea mel no.
        Rebum labores et usu. Pro nonumy evertitur ea, ius
        dignissim scribentur ne. Solet quodsi accommodare eu
        pro. Eam no dico quando civibus, oblique ullamcorper
        usu cu.{' '}
        <MarkWarning>
          Vim alia liberavisse concludaturque no, no est
          solum ipsum salutandi, in mel posse sonet
          instructior. Id omnis convenire prodesset usu,
          purto nibh bonorum mel ne. Consul aeterno
          elaboraret ne usu, nec ex tota tation tempor.{' '}
        </MarkWarning>
        Nam ei brute persius, ne eum autem saperet nominavi,
        duo ei atqui postea corpora. Novum dicunt quo ad, in
        erant nihil mediocritatem vis. Mundi sanctus usu ad,
        ut ius impetus ceteros senserit. Graeci probatus ex
        pri, id aliquip maiestatis mei. In malis falli pro,
        autem electram intellegebat ex cum. Cum nihil
        salutandi efficiantur an. Ut mel autem partem. Ne
        mundi aliquam eos, eam an reque ponderum, clita
        tation cu vis.{' '}
        <MarkDanger>
          Ei eros fastidii usu. Pri modus pericula
          definitiones ad, per omnium viderer an, sed dolor
          nonumy molestiae an. Erat nonumes id mei, no vix
          vitae homero nominati. Mea dicat facilis epicurei
          ei, eu sea affert periculis dissentiet, nisl falli
          postea mel no.
        </MarkDanger>{' '}
        Rebum labores et usu. Pro nonumy evertitur ea, ius
        dignissim scribentur ne. Solet quodsi accommodare eu
        pro. Eam no dico quando civibus, oblique ullamcorper
        usu cu. Vim alia liberavisse concludaturque no, no
        est solum ipsum salutandi, in mel posse sonet
        instructior. Id omnis convenire prodesset usu, purto
        nibh bonorum mel ne. Consul aeterno elaboraret ne
        usu, nec ex tota tation tempor. Nam ei brute
        persius, ne eum autem saperet nominavi, duo ei atqui
        postea corpora. Novum dicunt quo ad, in erant nihil
        mediocritatem vis. Mundi sanctus usu ad, ut ius
        impetus ceteros senserit. Graeci probatus ex pri, id
        aliquip maiestatis mei. In malis falli pro, autem
        electram intellegebat ex cum. Cum nihil salutandi
        efficiantur an.
      </div>
    </Container>
  );
};

export default Post;

const MarkPrimary = styled.mark`
  background-color: #ccdeef;
`;

const MarkWarning = styled.mark`
  background-color: #fdfdbf;
`;

const MarkDanger = styled.mark`
  background-color: #ffd2d2;
`;
