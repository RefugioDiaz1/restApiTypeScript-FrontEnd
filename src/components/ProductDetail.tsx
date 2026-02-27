import { Form, useNavigate, type ActionFunctionArgs , redirect, useFetcher} from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProductsById } from "../services/ProductService";

type ProductDetailProps = {
  product: Product;
};

export async function action({params}:ActionFunctionArgs) {
    
     if (params.id !== undefined) {
        await deleteProductsById(+params.id)
        return redirect('/')
    }
    
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const fetcher = useFetcher()
  const navigate = useNavigate();
  const isAvailable = product.availability;

  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">{product.name}</td>
        <td className="p-3 text-lg text-gray-800">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
        <fetcher.Form method='POST'>
            <button
            type="submit"
            name="id"
            value={product.id}
            className={`${isAvailable ? 'text-black' : 'text-red-600'}
            rounded-lg p-2 text-xs uppercase font-bold w-full border border-blue-100 
            hover:cursor-pointer`}
            >
                  {isAvailable ? "Disponible" : "No Disponible"}
            </button>
        </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 ">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => navigate(`productos/${product.id}/editar`,{
                state: {
                    product
                }
              })}
              className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center cursor-pointer "
            >
              Editar
            </button>
            <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
                if (!confirm(`¿Deseas eliminar este producto: ${product.name}?`)) {
                    e.preventDefault()
                }
            }}>
                <input 
                type="submit" 
                value='Eliminar'
                className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center cursor-pointer" />
            </Form>  
                     
          </div>
        </td>
      </tr>
    </>
  );
}
