// https://www.redditstatic.com/desktop2x/OverlayCreateChannel.3b12e7d70cccc9f7787d.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
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
				return ge
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
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/chat/actions/channel.ts"),
				C = n("./src/chat/actions/sendbird/index.ts"),
				b = n("./src/chat/actions/tracking.ts"),
				x = n("./src/chat/actions/user.ts"),
				_ = n("./src/chat/components/Scroller/index.tsx"),
				y = n("./node_modules/lodash/last.js"),
				f = n.n(y),
				g = n("./src/chat/constants/keys.ts"),
				E = n("./src/chat/helpers/dom.ts"),
				k = n("./src/chat/components/SearchBar/index.m.less"),
				O = n.n(k);
			const v = m.a.span("Bubble", O.a),
				U = m.a.span("SearchBarLabel", O.a),
				S = m.a.span("SearchBarField", O.a),
				B = m.a.input("SearchBarInput", O.a),
				N = m.a.wrapped(_.b, "SearchBarWrapper", O.a);
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
								const e = f()(this.props.selectedContacts);
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
					return i.a.createElement(N, {
						autoScrollBottom: !0
					}, i.a.createElement(U, null, a.fbt._("To:", null, {
						hk: "2eyFcf"
					})), i.a.createElement(S, null, n && n.length > 0 && n.map((e, t) => i.a.createElement(v, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(E.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), i.a.createElement(B, {
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
			var I = n("./src/chat/controls/Checkbox/index.tsx"),
				j = n("./src/chat/icons/Userpic/index.tsx"),
				w = n("./src/chat/components/SelectableUser/index.m.less"),
				H = n.n(w);
			const T = m.a.wrapped(I.a, "Checkbox", H.a),
				R = m.a.wrapped(j.a, "UserPic", H.a),
				F = m.a.span("Name", H.a);
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
					return i.a.createElement(T, {
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
				M = n.n(D);
			const P = m.a.span("Wrapper", M.a),
				W = m.a.span("Content", M.a),
				K = m.a.wrapped(j.a, "UserPic", M.a),
				z = m.a.span("Name", M.a),
				G = m.a.span("Context", M.a);
			class Q extends l.Component {
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						context: n
					} = this.props;
					return i.a.createElement(P, null, i.a.createElement(W, null, i.a.createElement(K, {
						userId: e
					}), i.a.createElement(z, null, t)), i.a.createElement(G, null, n))
				}
			}
			var Z = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				q = n("./src/chat/controls/Counter/index.tsx"),
				X = n("./src/chat/controls/Overlay/index.tsx"),
				V = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				Y = n("./src/chat/controls/OverlayHeader/index.tsx"),
				J = n("./src/chat/constants/channels.ts"),
				$ = n("./src/chat/helpers/chatSelector.ts"),
				ee = n("./src/chat/selectors/channels.ts"),
				te = n("./src/chat/selectors/contacts.ts"),
				ne = n("./src/chat/selectors/platform.ts"),
				ae = n("./src/chat/selectors/user.ts"),
				se = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				re = n.n(se);
			const ce = "contactForm",
				oe = m.a.div("Content", re.a),
				le = m.a.wrapped(I.a, "Checkbox", re.a),
				ie = m.a.wrapped(_.b, "Scroller", re.a),
				he = m.a.div("ListItem", re.a),
				de = m.a.div("ListItemHeader", re.a),
				ue = m.a.h4("ChatListHeader", re.a),
				me = m.a.span("Name", re.a),
				pe = m.a.span("Error", re.a),
				Ce = m.a.wrapped(Z.a, "ChannelNameInput", re.a),
				be = m.a.div("OverlayContent", re.a),
				xe = m.a.wrapped(e => i.a.createElement("div", {
					className: Object(u.a)(e.className, {
						[re.a.shown]: e.isShown
					})
				}, e.children), "ChannelNameWrapper", re.a);
			xe.displayName = "ChannelNameWrapper";
			const _e = e => e.toLocaleLowerCase(),
				ye = Object($.a)({
					channelAction: e => Object(ne.c)(e),
					channel: e => Object(ee.j)(e),
					contacts: te.h,
					currentUserName: ae.b,
					existingGroupUsers: e => {
						const t = Object(ee.w)(e, "members");
						return t && t.map(e => e.id)
					},
					isCreatingChannel: ee.J,
					loadedContacts: te.i,
					knownContacts: te.g,
					memberCount: e => Object(ee.w)(e, "memberCount"),
					selectedUsers: te.j,
					selectedUsersCount: te.k
				}),
				fe = Object(h.b)(ye, e => ({
					onCreateNewChannel: (t, n) => e(Object(p.B)(t, n)),
					onInviteUsersToExistingChannel: t => e(Object(p.H)(t)),
					onIdentifyContact: t => e(Object(C.k)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(d.a)()), e(Object(b.g)())
					},
					onSelectUser: t => e(Object(x.m)(t)),
					onUnselectUser: t => e(Object(x.t)(t)),
					removeAllSelectedUsers: () => e(Object(x.s)()),
					requestSuggestedContacts: () => e(Object(C.n)())
				}));
			class ge extends i.a.Component {
				constructor(e) {
					super(e), this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === J.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === J.a.INVITE_MEMBERS, this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							isCreatingChannel: e,
							memberCount: t,
							selectedUsersCount: n
						} = this.props;
						if (e) return n > J.f;
						return (n || 0) + (t || 0) > J.f
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
						return e === J.f ? a.fbt._("Maximum group size reached", null, {
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
					s.includes(t) ? a(t) : (r < J.f || r < 1) && (this.setState(e => ({
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
						for (const a in e) _e(e[a].id) === t && n.push(e[a])
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
					return t ? e.filter(e => _e(e.name).includes(_e(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && _e(e.name) === _e(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[_e(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return J.e - e.length
				}
				getGroupName() {
					const e = this.state.groupName.trim();
					if (e) return e;
					let t = this.getSelectedContacts();
					if (!t.length) return "";
					let {
						currentUserName: n
					} = this.props;
					for (; t.length && n.length + t[0].name.length <= J.e;) n = n + ", " + t[0].name, t = t.splice(1, t.length - 1);
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
						onFilterReset: u,
						onFilterContacts: m,
						onContactsSelect: p,
						onSubmit: C,
						onCancel: b
					} = this, x = this.getSelectedContacts(), _ = this.getFilteredContacts(), y = this.getLoadedContact(), f = !!s && !y, g = !!y, k = !this.getIsValidUser(s), O = this.handleChannelNameInput, v = this.availableCharacters(l), U = this.isSubmitDisabled(v), S = this.primaryButtonText(), B = this.isCreateChannelURLAction(), N = n >= J.f;
					return i.a.createElement(X.a, {
						className: e,
						onSubmit: Object(E.a)(C),
						innerContent: !0,
						form: !0
					}, i.a.createElement(be, null, i.a.createElement(Y.a, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: N
					}), i.a.createElement(oe, null, B && i.a.createElement(xe, {
						isShown: n > 1
					}, i.a.createElement(Ce, {
						handleChannelNameInput: O,
						placeholder: a.fbt._("Group name", null, {
							hk: "3YSrvu"
						})
					}, i.a.createElement(q.a, {
						count: v
					}))), i.a.createElement(L, {
						innerRef: this.searchBarElement,
						filter: s,
						resetFilter: c,
						selectedContacts: x,
						onFilterReset: u,
						onFilterContacts: m,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), i.a.createElement(ie, {
						loadMoreRows: r.a,
						threshold: 0
					}, o()(_, e => e.name).map(e => i.a.createElement(he, {
						key: e.name
					}, d(e.id) || e.isBlocked || !1 === e.acceptChats ? i.a.createElement(Q, {
						contact: e,
						context: this.getBlockedContactText(e)
					}) : i.a.createElement(A, {
						formName: ce,
						contact: e,
						onChange: p,
						isChecked: h
					}))), (f || g) && i.a.createElement(de, null, i.a.createElement(ue, null, a.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), f && !g && i.a.createElement(he, null, i.a.createElement(le, {
						type: "checkbox",
						disabled: !0,
						name: ce,
						value: s,
						onChange: p
					}, i.a.createElement(me, null, s, k && i.a.createElement(pe, null, a.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), g && y && i.a.createElement(he, null, !B && (d(y.id) || y.isBlocked) || !1 === y.acceptChats ? i.a.createElement(Q, {
						contact: y,
						context: this.getBlockedContactText(y)
					}) : i.a.createElement(A, {
						formName: ce,
						contact: y,
						onChange: p,
						isChecked: h
					})))), i.a.createElement(V.a, {
						primaryButtonText: S,
						primaryButtonDisabled: U,
						secondaryButtonAction: b
					})))
				}
			}
			ge.displayName = "OverlayCreateChannel";
			t.default = fe(ge)
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
				u = c.a.wrapped(e => s.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", i.a);
			var m = e => s.a.createElement(o.a, h({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(d, null), s.a.createElement(u, null))),
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
				E = c.a.wrapped(m, "Checked", f.a),
				k = c.a.wrapped(_, "Unchecked", f.a),
				O = c.a.span("Wrapper", f.a),
				v = c.a.span("Content", f.a),
				U = c.a.span("Control", f.a),
				S = c.a.label("CheckInput", f.a);
			t.a = e => s.a.createElement(S, {
				className: Object(r.a)(e.className, {
					[f.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, s.a.createElement(O, null, e.children && !e.rightPosition && s.a.createElement(v, null, e.children), s.a.createElement(U, null, s.a.createElement(g, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(E, null), s.a.createElement(k, null)), e.children && e.rightPosition && s.a.createElement(v, null, e.children)))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				h = n("./src/chat/controls/Button/index.tsx"),
				d = n("./src/chat/helpers/dom.ts"),
				u = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = n.n(u);
			const p = i.a.wrapped(h.a, "Button", m.a),
				C = Object(c.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(d.b)(() => e(Object(o.a)()))
				})),
				b = i.a.div("OverlayControlBar", m.a),
				x = C(e => r.a.createElement(b, {
					className: Object(l.a)({
						[m.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(p, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, a.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : r.a.createElement(p, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || a.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && r.a.createElement(p, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || a.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			x.displayName = "OverlayControlBar", t.a = x
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
				u = r.a.span("Warning", l.a);
			t.a = ({
				message: e,
				title: t,
				warning: n
			}) => {
				const a = n ? u : d;
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayCreateChannel.3b12e7d70cccc9f7787d.js.map