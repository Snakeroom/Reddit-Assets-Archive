// https://www.redditstatic.com/desktop2x/OverlayCreateChannel.4f3c6a56e2cfa2831721.js
// Retrieved at 9/14/2021, 12:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayCreateChannel"], {
		"./src/chat/components/OverlayCreateChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_1hC_Uia5BNA3T_u7HMpSZG",
				content: "_1hC_Uia5BNA3T_u7HMpSZG",
				Checkbox: "_3GsQM0WckX2LUq1uXLAPFK",
				checkbox: "_3GsQM0WckX2LUq1uXLAPFK",
				Scroller: "_3jTOQRN48SYTsqhBKHqC4Z",
				scroller: "_3jTOQRN48SYTsqhBKHqC4Z",
				ListItem: "_1xahoE-aw4Dlt5luSt2p4M",
				listItem: "_1xahoE-aw4Dlt5luSt2p4M",
				ListItemHeader: "_3WOxEuf3YCyzuUH93Vlyc5",
				listItemHeader: "_3WOxEuf3YCyzuUH93Vlyc5",
				ChatListHeader: "f1Vn8P6AnRNELbDzUjx9e",
				chatListHeader: "f1Vn8P6AnRNELbDzUjx9e",
				Name: "JBR5EOMqd72EqgfXylDwk",
				name: "JBR5EOMqd72EqgfXylDwk",
				Error: "_38k-vHCy1mrtIvoNMijbPz",
				error: "_38k-vHCy1mrtIvoNMijbPz",
				ChannelNameInput: "_1q7NucdJkk8imHDBisfJyk",
				channelNameInput: "_1q7NucdJkk8imHDBisfJyk",
				OverlayContent: "_1ppnyRj_9LpVLO_D4hSmuD",
				overlayContent: "_1ppnyRj_9LpVLO_D4hSmuD",
				ChannelNameWrapper: "_3kiusu26cM8caGCqS2DjBs",
				channelNameWrapper: "_3kiusu26cM8caGCqS2DjBs",
				shown: "_2Mva-9o8IuN_QrvvZYRHyH"
			}
		},
		"./src/chat/components/OverlayCreateChannel/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "OverlayCreateChannel", (function() {
				return de
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				c = n("./node_modules/lodash/uniqBy.js"),
				o = n.n(c),
				l = n("./node_modules/react/index.js"),
				i = n.n(l),
				h = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/chat/actions/channel.ts"),
				p = n("./src/chat/actions/sendbird/index.ts"),
				C = n("./src/chat/actions/tracking.ts"),
				b = n("./src/chat/actions/user.ts"),
				x = n("./src/chat/components/Scroller/index.tsx"),
				_ = n("./node_modules/lodash/last.js"),
				y = n.n(_),
				f = n("./src/lib/lessComponent.tsx"),
				g = n("./src/chat/constants/keys.ts"),
				k = n("./src/chat/helpers/dom.ts"),
				E = n("./src/chat/components/SearchBar/index.m.less"),
				O = n.n(E);
			const B = f.a.span("Bubble", O.a),
				U = f.a.span("SearchBarLabel", O.a),
				v = f.a.span("SearchBarField", O.a),
				N = f.a.input("SearchBarInput", O.a),
				S = f.a.wrapped(x.b, "SearchBarWrapper", O.a);
			class L extends i.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case g.f:
							case g.e: {
								const t = this.searchBarInputRef.current;
								return t && t.focus(), this.props.onUnselect(e.id)
							}
							case g.b: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case g.c: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this), this.searchBarInputRef = i.a.createRef()
				}
				stopEnter(e) {
					e.key === g.g && e.preventDefault()
				}
				onFilterChange(e) {
					this.props.onFilterContacts(e.currentTarget.value)
				}
				searchKeyHandler(e) {
					const {
						props: {
							onFilterContacts: t,
							onIdentifyContact: n,
							onIdentifyContactTimeout: a
						}
					} = this, s = e.currentTarget, r = () => s.value;
					switch (this.timeoutToken && clearTimeout(this.timeoutToken), this.timeoutToken = setTimeout(() => {
						r() && n(r())
					}, a), e.key) {
						case g.g:
							return n(r());
						case g.b:
						case g.f:
						case g.e:
							if (0 === r().length) {
								const e = y()(this.props.selectedContacts);
								if (e && e.name) {
									const t = this.bubbleRefs[e.name];
									t && t.focus()
								}
							}
					}
					return t(r())
				}
				render() {
					const {
						props: {
							filter: e,
							resetFilter: t,
							selectedContacts: n,
							onFilterReset: s
						}
					} = this, r = t ? "" : e;
					return i.a.createElement(S, {
						autoScrollBottom: !0
					}, i.a.createElement(U, null, a.fbt._("To:", null, {
						hk: "2eyFcf"
					})), i.a.createElement(v, null, n && n.length > 0 && n.map((e, t) => i.a.createElement(B, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(k.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), i.a.createElement(N, {
						key: "search-bar",
						type: "text",
						autoFocus: !0,
						value: r,
						onFocus: s,
						onChange: this.onFilterChange,
						onKeyDown: this.stopEnter,
						onKeyUp: this.searchKeyHandler,
						innerRef: this.searchBarInputRef
					})))
				}
			}
			L.defaultProps = {
				onIdentifyContactTimeout: 1e3
			};
			var j = n("./src/chat/controls/Checkbox/index.tsx"),
				I = n("./src/chat/icons/Userpic/index.tsx"),
				H = n("./src/chat/components/SelectableUser/index.m.less"),
				T = n.n(H);
			const w = f.a.wrapped(j.a, "Checkbox", T.a),
				R = f.a.wrapped(I.a, "UserPic", T.a),
				F = f.a.span("Name", T.a);
			class A extends l.Component {
				constructor() {
					super(...arguments), this.CONTACT_FORM_NAME = "contactForm"
				}
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						formName: n,
						isChecked: a,
						onChange: s
					} = this.props;
					return i.a.createElement(w, {
						type: "checkbox",
						name: n,
						value: t,
						onChange: s,
						checked: a(e),
						id: e
					}, i.a.createElement(R, {
						userId: e
					}), i.a.createElement(F, null, t))
				}
			}
			var D = n("./src/chat/components/UnselectableUser/index.m.less"),
				P = n.n(D);
			const M = f.a.span("Wrapper", P.a),
				K = f.a.span("Content", P.a),
				W = f.a.wrapped(I.a, "UserPic", P.a),
				G = f.a.span("Name", P.a),
				Q = f.a.span("Context", P.a);
			class z extends l.Component {
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						context: n
					} = this.props;
					return i.a.createElement(M, null, i.a.createElement(K, null, i.a.createElement(W, {
						userId: e
					}), i.a.createElement(G, null, t)), i.a.createElement(Q, null, n))
				}
			}
			var Z = n("./src/chat/constants/channels.ts"),
				q = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				X = n("./src/chat/controls/Counter/index.tsx"),
				V = n("./src/chat/controls/Overlay/index.tsx"),
				Y = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				J = n("./src/chat/controls/OverlayHeader/index.tsx"),
				$ = n("./src/chat/helpers/chatSelector.ts"),
				ee = n("./src/chat/selectors/channels.ts"),
				te = n("./src/chat/selectors/contacts.ts"),
				ne = n("./src/chat/selectors/platform.ts"),
				ae = n("./src/chat/selectors/user.ts"),
				se = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				re = n.n(se);
			const ce = "contactForm",
				oe = ({
					className: e,
					children: t,
					isShown: n
				}) => i.a.createElement("div", {
					className: Object(m.a)(re.a.ChannelNameWrapper, e, {
						[re.a.shown]: n
					})
				}, t),
				le = e => e.toLocaleLowerCase(),
				ie = Object($.a)({
					channelAction: e => Object(ne.c)(e),
					channel: e => Object(ee.m)(e),
					contacts: te.h,
					currentUserName: ae.b,
					existingGroupUsers: e => {
						const t = Object(ee.A)(e, "members");
						return t && t.map(e => e.id)
					},
					isCreatingChannel: ee.K,
					loadedContacts: te.i,
					knownContacts: te.g,
					memberCount: e => Object(ee.A)(e, "memberCount"),
					selectedUsers: te.j,
					selectedUsersCount: te.k
				}),
				he = Object(h.b)(ie, e => ({
					onCreateNewChannel: (t, n) => e(Object(u.A)(t, n)),
					onInviteUsersToExistingChannel: t => e(Object(u.F)(t)),
					onIdentifyContact: t => e(Object(p.j)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(d.a)()), e(Object(C.j)())
					},
					onSelectUser: t => e(Object(b.m)(t)),
					onUnselectUser: t => e(Object(b.t)(t)),
					removeAllSelectedUsers: () => e(Object(b.s)()),
					requestSuggestedContacts: () => e(Object(p.l)())
				}));
			class de extends i.a.Component {
				constructor(e) {
					super(e), this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === Z.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === Z.a.INVITE_MEMBERS, this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							memberCount: e,
							selectedUsersCount: t
						} = this.props;
						return t + (this.isInviteMembersURLAction() ? e : 0) > Z.f
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: n
						} = this.props, a = this.isCreateChannelURLAction(), s = e < 0, r = n > 1, c = this.hasTooManyMembers();
						return !n || t || a && r && (s || c) || !a && c
					}, this.getInviteMembersText = () => a.fbt._("Add to group", null, {
						hk: "4n0y9e"
					}), this.primaryButtonText = () => this.isInviteMembersURLAction() ? this.getInviteMembersText() : a.fbt._("Start a chat", null, {
						hk: "4BZNdM"
					}), this.getBlockedContactText = e => e.isBlocked ? a.fbt._("blocked", null, {
						hk: "3BVDae"
					}) : !1 === e.acceptChats ? a.fbt._("unable to message this account", null, {
						hk: "SDEZ3"
					}) : a.fbt._("already in group", null, {
						hk: "1z5QI7"
					}), this.getOverlayTitle = () => this.isCreateChannelURLAction() ? a.fbt._("Create Group", null, {
						hk: "1SQOf3"
					}) : this.getInviteMembersText(), this.getOverlayMessage = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return e === Z.f ? a.fbt._("Maximum group size reached", null, {
							hk: "7hpRV"
						}) : ""
					}, this.getSelectedContacts = this.getSelectedContacts.bind(this), this.onContactsSelect = this.onContactsSelect.bind(this), this.onFilterContacts = this.onFilterContacts.bind(this), this.onFilterReset = this.onFilterReset.bind(this), this.onSubmit = this.onSubmit.bind(this), this.onCancel = this.onCancel.bind(this), this.handleChannelNameInput = this.handleChannelNameInput.bind(this), this.searchBarElement = i.a.createRef(), this.state = {
						filter: "",
						resetFilter: !1,
						groupName: ""
					}
				}
				UNSAFE_componentWillMount() {
					this.props.requestSuggestedContacts()
				}
				componentWillUnmount() {
					this.props.removeAllSelectedUsers()
				}
				onContactsSelect(e) {
					const t = e.target.id,
						{
							onSelectUser: n,
							onUnselectUser: a,
							selectedUsers: s,
							selectedUsersCount: r
						} = this.props;
					s.includes(t) ? a(t) : (r < Z.f || r < 1) && (this.setState(e => ({
						...e,
						resetFilter: !0
					})), n(t)), this.searchBarElement.current && this.searchBarElement.current.focus()
				}
				onFilterContacts(e) {
					this.setState({
						filter: e
					})
				}
				onFilterReset() {
					this.setState({
						filter: "",
						resetFilter: !1
					})
				}
				handleChannelNameInput(e) {
					this.setState({
						groupName: e
					})
				}
				onSubmit() {
					const {
						onCreateNewChannel: e,
						onInviteUsersToExistingChannel: t
					} = this.props, n = this.getSelectedContacts().map(e => e.id);
					if (n && n.length) {
						const a = this.getGroupName();
						this.isCreateChannelURLAction() ? e(n, a) : t(n)
					}
				}
				onCancel() {
					this.props.onCancelAndGoBack()
				}
				getSelectedContacts() {
					const {
						loadedContacts: e,
						selectedUsers: t
					} = this.props, n = [];
					return t.map(t => {
						for (const a in e) le(e[a].id) === t && n.push(e[a])
					}), n
				}
				getFilteredContacts() {
					const {
						props: {
							contacts: e
						},
						state: {
							filter: t
						}
					} = this;
					return t ? e.filter(e => le(e.name).includes(le(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && le(e.name) === le(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[le(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return Z.e - e.length
				}
				getGroupName() {
					const e = this.state.groupName.trim();
					if (e) return e;
					let t = this.getSelectedContacts();
					if (!t.length) return "";
					let {
						currentUserName: n
					} = this.props;
					for (; t.length && n.length + t[0].name.length <= Z.e;) n = n + ", " + t[0].name, t = t.splice(1, t.length - 1);
					return n
				}
				render() {
					const {
						props: {
							className: e,
							onIdentifyContact: t,
							selectedUsersCount: n
						},
						state: {
							filter: s,
							resetFilter: c,
							groupName: l
						},
						isUserSelected: h,
						isExistingGroupUser: d,
						onFilterReset: m,
						onFilterContacts: u,
						onContactsSelect: p,
						onSubmit: C,
						onCancel: b
					} = this, _ = this.getSelectedContacts(), y = this.getFilteredContacts(), f = this.getLoadedContact(), g = !!s && !f, E = !!f, O = !this.getIsValidUser(s), B = this.handleChannelNameInput, U = this.availableCharacters(l), v = this.isSubmitDisabled(U), N = this.primaryButtonText(), S = this.isCreateChannelURLAction(), I = n >= Z.f;
					return i.a.createElement(V.a, {
						className: e,
						onSubmit: Object(k.a)(C),
						innerContent: !0,
						form: !0
					}, i.a.createElement("div", {
						className: re.a.OverlayContent
					}, i.a.createElement(J.a, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: I
					}), i.a.createElement("div", {
						className: re.a.Content
					}, S && i.a.createElement(oe, {
						isShown: n > 1
					}, i.a.createElement(q.a, {
						className: re.a.ChannelNameInput,
						handleChannelNameInput: B,
						placeholder: a.fbt._("Group name", null, {
							hk: "3YSrvu"
						})
					}, i.a.createElement(X.a, {
						count: U
					}))), i.a.createElement(L, {
						innerRef: this.searchBarElement,
						filter: s,
						resetFilter: c,
						selectedContacts: _,
						onFilterReset: m,
						onFilterContacts: u,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), i.a.createElement(x.b, {
						className: re.a.Scroller,
						loadMoreRows: r.a
					}, o()(y, e => e.name).map(e => i.a.createElement("div", {
						className: re.a.ListItem,
						key: e.name
					}, d(e.id) || e.isBlocked || !1 === e.acceptChats ? i.a.createElement(z, {
						contact: e,
						context: this.getBlockedContactText(e)
					}) : i.a.createElement(A, {
						formName: ce,
						contact: e,
						onChange: p,
						isChecked: h
					}))), (g || E) && i.a.createElement("div", {
						className: re.a.ListItemHeader
					}, i.a.createElement("h4", {
						className: re.a.ChatListHeader
					}, a.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), g && !E && i.a.createElement("div", {
						className: re.a.ListItem
					}, i.a.createElement(j.a, {
						className: re.a.Checkbox,
						type: "checkbox",
						disabled: !0,
						name: ce,
						value: s,
						onChange: p
					}, i.a.createElement("span", {
						className: re.a.Name
					}, s, O && i.a.createElement("span", {
						className: re.a.Error
					}, a.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), E && f && i.a.createElement("div", {
						className: re.a.ListItem
					}, !S && (d(f.id) || f.isBlocked) || !1 === f.acceptChats ? i.a.createElement(z, {
						contact: f,
						context: this.getBlockedContactText(f)
					}) : i.a.createElement(A, {
						formName: ce,
						contact: f,
						onChange: p,
						isChecked: h
					})))), i.a.createElement(Y.a, {
						primaryButtonText: N,
						primaryButtonDisabled: v,
						secondaryButtonAction: b
					})))
				}
			}
			de.displayName = "OverlayCreateChannel";
			t.default = he(de)
		},
		"./src/chat/components/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				SearchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				searchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				SearchBarLabel: "n8QUlQDkULMxz2adkFkZN",
				searchBarLabel: "n8QUlQDkULMxz2adkFkZN",
				SearchBarField: "_3vilBtEofGPjLW8XnN__LH",
				searchBarField: "_3vilBtEofGPjLW8XnN__LH",
				SearchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				searchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				Bubble: "_3Os5eNEJdv4w6tsQdtTT5d",
				bubble: "_3Os5eNEJdv4w6tsQdtTT5d"
			}
		},
		"./src/chat/components/SelectableUser/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				UserPic: "zW7z1umVHXoa1LGs0PhqY",
				userPic: "zW7z1umVHXoa1LGs0PhqY",
				Name: "_1HoUzT_zRlnm-zLSJPRh28",
				name: "_1HoUzT_zRlnm-zLSJPRh28"
			}
		},
		"./src/chat/components/UnselectableUser/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "oifWWeXtU7UUw2o2ujOPY",
				wrapper: "oifWWeXtU7UUw2o2ujOPY",
				Content: "Dfb74heOWSZF6_doPiIDe",
				content: "Dfb74heOWSZF6_doPiIDe",
				UserPic: "_367xw6e_C8q7AIpViUzQ4",
				userPic: "_367xw6e_C8q7AIpViUzQ4",
				Name: "_2UYcL31wx648GQ4cbrbg8b",
				name: "_2UYcL31wx648GQ4cbrbg8b",
				Context: "_1ombhjP6A9filW0mZ6Wxv1",
				context: "_1ombhjP6A9filW0mZ6Wxv1"
			}
		},
		"./src/chat/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckInput: "_1_de1ouiEaWxe0lu0R54Zf",
				checkInput: "_1_de1ouiEaWxe0lu0R54Zf",
				Content: "_1RHO7h5PWuKEmC8QD2KnOB",
				content: "_1RHO7h5PWuKEmC8QD2KnOB",
				Control: "aKXv6qpFIjz-_IZOZsYLz",
				control: "aKXv6qpFIjz-_IZOZsYLz",
				HiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				hiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				Checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				Unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				Wrapper: "_1SMteSSKECXjIaZTOLZ2z-",
				wrapper: "_1SMteSSKECXjIaZTOLZ2z-"
			}
		},
		"./src/chat/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.tsx"),
				l = n("./src/chat/icons/svgs/Checkbox/checked.m.less"),
				i = n.n(l);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const d = c.a.wrapped(e => s.a.createElement("circle", {
					className: e.className,
					cy: "10",
					cx: "10",
					r: "10"
				}), "StyledCircle", i.a),
				m = c.a.wrapped(e => s.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", i.a);
			var u = e => s.a.createElement(o.a, h({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(d, null), s.a.createElement(m, null))),
				p = n("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				C = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const x = c.a.wrapped(e => s.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", C.a);
			var _ = e => s.a.createElement(o.a, b({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(x, null))),
				y = n("./src/chat/controls/Checkbox/index.m.less"),
				f = n.n(y);
			const g = c.a.input("HiddenInput", f.a),
				k = c.a.wrapped(u, "Checked", f.a),
				E = c.a.wrapped(_, "Unchecked", f.a),
				O = c.a.span("Wrapper", f.a),
				B = c.a.span("Content", f.a),
				U = c.a.span("Control", f.a),
				v = c.a.label("CheckInput", f.a);
			t.a = e => s.a.createElement(v, {
				className: Object(r.a)(e.className, {
					[f.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, s.a.createElement(O, null, e.children && !e.rightPosition && s.a.createElement(B, null, e.children), s.a.createElement(U, null, s.a.createElement(g, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(k, null), s.a.createElement(E, null)), e.children && e.rightPosition && s.a.createElement(B, null, e.children)))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				NoBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				noBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				NoHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				noHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				ButtonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				buttonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				HeaderText: "_3kD8pfjcLZgRDsMewcOmc4",
				headerText: "_3kD8pfjcLZgRDsMewcOmc4"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				h = n("./src/chat/controls/Button/index.tsx"),
				d = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = n.n(d),
				u = n("./src/chat/helpers/dom.ts");
			const p = Object(c.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(u.b)(() => e(Object(o.a)()))
			}))(e => r.a.createElement("div", {
				className: Object(i.a)({
					[m.a.primary]: e.primaryButtonOnly,
					[m.a.NoHeaderText]: !e.children
				}, m.a.OverlayControlBar, e.className)
			}, e.children && r.a.createElement("span", {
				className: m.a.HeaderText
			}, e.children), r.a.createElement("div", {
				className: m.a.ButtonsWrapper
			}, e.primaryButtonBlock && r.a.createElement(h.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(m.a.Button, m.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(h.a, {
				className: m.a.Button,
				href: `${l.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : r.a.createElement(h.a, {
				className: m.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && r.a.createElement(h.a, {
				className: m.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || a.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			p.displayName = "OverlayControlBar", t.a = p
		},
		"./src/chat/controls/OverlayHeader/index.m.less": function(e, t, n) {
			e.exports = {
				BaseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				baseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				Header: "_3scCev7HurKBoQph3rzCoU",
				header: "_3scCev7HurKBoQph3rzCoU",
				Title: "_3A0guGtMzQKVwbvpqNB97u",
				title: "_3A0guGtMzQKVwbvpqNB97u",
				Normal: "_1Aqcks07FlOaxti1O-onw7",
				normal: "_1Aqcks07FlOaxti1O-onw7",
				Warning: "_14Pn1s4X6btpX11HaKT9P2",
				warning: "_14Pn1s4X6btpX11HaKT9P2"
			}
		},
		"./src/chat/controls/OverlayHeader/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/components/ToastNotification/index.tsx"),
				o = n("./src/chat/controls/OverlayHeader/index.m.less"),
				l = n.n(o);
			const i = r.a.header("Header", l.a),
				h = r.a.h1("Title", l.a),
				d = r.a.span("Normal", l.a),
				m = r.a.span("Warning", l.a);
			t.a = ({
				message: e,
				title: t,
				warning: n
			}) => {
				const a = n ? m : d;
				return s.a.createElement(i, null, s.a.createElement(h, null, t), s.a.createElement(a, null, e), s.a.createElement(c.a, null))
			}
		},
		"./src/chat/icons/svgs/Checkbox/checked.m.less": function(e, t, n) {
			e.exports = {
				StyledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				styledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				StyledCheckmark: "_2hHL8LCEXapDOjiChO0JWH",
				styledCheckmark: "_2hHL8LCEXapDOjiChO0JWH"
			}
		},
		"./src/chat/icons/svgs/Checkbox/unchecked.m.less": function(e, t, n) {
			e.exports = {
				StyledCircle: "_2WDOoyLYNQZODKF6ScpgSO",
				styledCircle: "_2WDOoyLYNQZODKF6ScpgSO"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayCreateChannel.4f3c6a56e2cfa2831721.js.map