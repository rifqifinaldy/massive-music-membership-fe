import { Avatar, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import InputField from "@MME-components/form-input/input-field";
import InputSelect from "@MME-components/form-input/input-select";
import { IRootContext, RootContext } from "@MME-context/root.context";
import {
  EMemberType,
  IMembers,
  TMembersInput,
} from "@MME-interface/member.interface";
import React, { useContext } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { validateMember } from "./member-form.validation";
import { yupResolver } from "@hookform/resolvers/yup";

export type TMemberFormType = "create" | "edit";

interface IProps {
  type: TMemberFormType;
  action: (data: IMembers) => void;
  data?: IMembers;
}

const MemberForm: React.FC<IProps> = ({ type, action, data }) => {
  const { modal } = useContext(RootContext) as IRootContext;
  const methods = useForm<TMembersInput>({
    resolver: yupResolver(validateMember) as never,
    values: {
      first_name: data?.first_name || "",
      last_name: data?.last_name || "",
      email: data?.email || "",
      gender: data?.gender || "",
      age: data?.age || null,
      profile_pic: data?.profile_pic || null,
      isActive: data?.isActive || false,
      member_type: data?.member_type || null,
    },
  });

  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (payload) => {
    if (type === "create") {
      action(payload as IMembers);
    } else {
      action({ ...(payload as IMembers), id: Number(data?.id) });
    }
  };

  return (
    <FormProvider {...methods}>
      <Flex
        flexDir="column"
        as="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        gap="20px"
      >
        <Flex
          gap="40px"
          flexDir={{ base: "column", sm: "row" }}
          alignItems={{ base: "center", sm: "flex-start" }}
          w="full"
        >
          <Flex flexDir="column" w="25%" alignItems="center" gap="10px">
            <Avatar
              size="2xl"
              src={watch("profile_pic") || ""}
              name={`${watch("first_name")} ${watch("last_name")}`}
            />
            {type === "create" && (
              <Text fontSize="12px" color="text.gray" textAlign="center">
                * Your profile picture will be auto generated
              </Text>
            )}
          </Flex>
          <Grid
            w="full"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            gap="10px"
          >
            <GridItem>
              <InputField
                id="first_name"
                name="first_name"
                label="First Name"
                type="text"
                placeholder="First Name"
                error={errors?.first_name?.message}
                required
              />
            </GridItem>
            <GridItem>
              <InputField
                id="last_name"
                name="last_name"
                label="Last Name"
                type="text"
                placeholder="Last Name"
                error={errors?.last_name?.message}
              />
            </GridItem>
            <GridItem>
              <InputField
                id="age"
                name="age"
                label="Age"
                type="number"
                error={errors?.age?.message}
                placeholder="Age"
                required
              />
            </GridItem>
            <GridItem>
              <InputSelect
                id="gender"
                name="gender"
                label="Gender"
                placeholder="Choose Gender"
                error={errors?.gender?.message}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </InputSelect>
            </GridItem>
          </Grid>
        </Flex>
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          error={errors?.email?.message}
          required
        />
        <InputSelect
          id="member_type"
          name="member_type"
          label="Member Type"
          placeholder="Choose Member Type"
          error={errors?.member_type?.message}
          required
        >
          <option value={EMemberType.PREMIUM}>{EMemberType.PREMIUM}</option>
          <option value={EMemberType.REGULAR}>{EMemberType.REGULAR}</option>
        </InputSelect>
        <Flex mt="40px" gap="20px" justifyContent="flex-end">
          <Button
            onClick={() => modal.onClose()}
            type="button"
            variant="outline"
            colorScheme="yellow"
          >
            Cancel
          </Button>
          <Button type="submit" colorScheme="green">
            {type === "create" ? "Create" : "Edit"} User
          </Button>
        </Flex>
      </Flex>
    </FormProvider>
  );
};

export default MemberForm;
