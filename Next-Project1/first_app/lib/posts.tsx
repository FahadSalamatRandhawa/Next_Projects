import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postDirectory=path.join(process.cwd(),'posts');

export function getSortedPostsData(){
    const fileNames=fs.readdirSync(postDirectory);
    const allPostsData=fileNames.map((fileName)=>{
        const id=fileName.replace(/\.md/,'');

        const fullPath=path.join(postDirectory,fileName);
        const fileContent=fs.readFileSync(fullPath,'utf8');

        const matterResult=matter(fileContent);
    //    console.log('Matte Data')
    //    console.log(matterResult.data.title);
        const title:string=matterResult.data.title;
        const date:string=matterResult.data.date;
        return {
            id,
            title,
            date
        };
    });

    return allPostsData.sort((a,b)=>{
        if(a.date>b.date){
            return -1
        }else{
            return 1;
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory);
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

  export async function getPostData(id:string){
    const fullPath=path.join(postDirectory,`${id}.md`);
    const fileContent=fs.readFileSync(fullPath,'utf8');

    const matterResult=matter(fileContent);
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();
//
//    console.log(matterResult.content)

    const title:string=matterResult.data.title;
    const date:string=matterResult.data.date;

    return {
        id,
        contentHtml,
        date,
        title
    }
  }