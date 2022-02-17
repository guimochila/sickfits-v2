import type { KeystoneContext } from '@keystone-6/core/types'
import { products } from './data'

export async function insertSeedData({ prisma }: KeystoneContext) {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`)
  for (const product of products) {
    console.log(`  🛍️  Adding Product: ${product.name}`)
    const { id } = await prisma.productImage.create({
      data: {
        image: JSON.stringify(product.photo),
        altText: product.description,
      },
    })
    delete product.photo
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    product.photoId = id

    await prisma.product.create({ data: product })
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`)
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``,
  )
  process.exit()
}
