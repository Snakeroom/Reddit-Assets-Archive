// https://www.redditstatic.com/desktop2x/OverlayCreateChannel.36f5587ad8e16b9b1ddb.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayCreateChannel"], {
		"./src/chat/components/OverlayCreateChannel/index.m.less": function(e, t, s) {
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
		"./src/chat/components/OverlayCreateChannel/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "OverlayCreateChannel", (function() {
				return he
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/noop.js"),
				r = s.n(a),
				c = s("./node_modules/lodash/uniqBy.js"),
				o = s.n(c),
				i = s("./node_modules/react/index.js"),
				l = s.n(i),
				h = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/chat/actions/channel.ts"),
				d = s("./src/chat/actions/sendbird/index.ts"),
				p = s("./src/chat/actions/tracking.ts"),
				C = s("./src/chat/actions/user.ts"),
				b = s("./src/chat/components/Scroller/index.tsx"),
				f = s("./node_modules/lodash/last.js"),
				x = s.n(f),
				U = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/chat/constants/keys.ts"),
				g = s("./src/chat/helpers/dom.ts"),
				N = s("./src/chat/components/SearchBar/index.m.less"),
				E = s.n(N);
			const S = U.a.span("Bubble", E.a),
				k = U.a.span("SearchBarLabel", E.a),
				y = U.a.span("SearchBarField", E.a),
				v = U.a.input("SearchBarInput", E.a),
				B = U.a.wrapped(b.b, "SearchBarWrapper", E.a);
			class L extends l.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case _.f:
							case _.e: {
								const t = this.searchBarInputRef.current;
								return t && t.focus(), this.props.onUnselect(e.id)
							}
							case _.b: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case _.c: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this), this.searchBarInputRef = l.a.createRef()
				}
				stopEnter(e) {
					e.key === _.g && e.preventDefault()
				}
				onFilterChange(e) {
					this.props.onFilterContacts(e.currentTarget.value)
				}
				searchKeyHandler(e) {
					const {
						props: {
							onFilterContacts: t,
							onIdentifyContact: s,
							onIdentifyContactTimeout: n
						}
					} = this, a = e.currentTarget, r = () => a.value;
					switch (this.timeoutToken && clearTimeout(this.timeoutToken), this.timeoutToken = setTimeout(() => {
						r() && s(r())
					}, n), e.key) {
						case _.g:
							return s(r());
						case _.b:
						case _.f:
						case _.e:
							if (0 === r().length) {
								const e = x()(this.props.selectedContacts);
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
							selectedContacts: s,
							onFilterReset: a
						}
					} = this, r = t ? "" : e;
					return l.a.createElement(B, {
						autoScrollBottom: !0
					}, l.a.createElement(k, null, n.fbt._("To:", null, {
						hk: "2eyFcf"
					})), l.a.createElement(y, null, s && s.length > 0 && s.map((e, t) => l.a.createElement(S, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(g.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), l.a.createElement(v, {
						key: "search-bar",
						type: "text",
						autoFocus: !0,
						value: r,
						onFocus: a,
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
			var O = s("./src/chat/controls/Checkbox/index.tsx"),
				I = s("./src/chat/icons/Userpic/index.tsx"),
				T = s("./src/chat/components/SelectableUser/index.m.less"),
				R = s.n(T);
			const A = U.a.wrapped(O.a, "Checkbox", R.a),
				j = U.a.wrapped(I.a, "UserPic", R.a),
				F = U.a.span("Name", R.a);
			class w extends i.Component {
				constructor() {
					super(...arguments), this.CONTACT_FORM_NAME = "contactForm"
				}
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						formName: s,
						isChecked: n,
						onChange: a
					} = this.props;
					return l.a.createElement(A, {
						type: "checkbox",
						name: s,
						value: t,
						onChange: a,
						checked: n(e),
						id: e
					}, l.a.createElement(j, {
						userId: e
					}), l.a.createElement(F, null, t))
				}
			}
			var M = s("./src/chat/components/UnselectableUser/index.m.less"),
				H = s.n(M);
			const D = U.a.span("Wrapper", H.a),
				P = U.a.span("Content", H.a),
				W = U.a.wrapped(I.a, "UserPic", H.a),
				G = U.a.span("Name", H.a),
				q = U.a.span("Context", H.a);
			class z extends i.Component {
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						context: s
					} = this.props;
					return l.a.createElement(D, null, l.a.createElement(P, null, l.a.createElement(W, {
						userId: e
					}), l.a.createElement(G, null, t)), l.a.createElement(q, null, s))
				}
			}
			var K = s("./src/chat/constants/channels.ts"),
				V = s("./src/chat/controls/ChannelNameInput/index.tsx"),
				Z = s("./src/chat/controls/Counter/index.tsx"),
				Q = s("./src/chat/controls/Overlay/index.tsx"),
				Y = s("./src/chat/controls/OverlayControlBar/index.tsx"),
				X = s("./src/chat/controls/OverlayHeader/index.tsx"),
				J = s("./src/chat/helpers/chatSelector.ts"),
				$ = s("./src/chat/selectors/channels.ts"),
				ee = s("./src/chat/selectors/contacts.ts"),
				te = s("./src/chat/selectors/platform.ts"),
				se = s("./src/chat/selectors/user.ts"),
				ne = s("./src/chat/components/OverlayCreateChannel/index.m.less"),
				ae = s.n(ne);
			const re = "contactForm",
				ce = ({
					className: e,
					children: t,
					isShown: s
				}) => l.a.createElement("div", {
					className: Object(m.a)(ae.a.ChannelNameWrapper, e, {
						[ae.a.shown]: s
					})
				}, t),
				oe = e => e.toLocaleLowerCase(),
				ie = Object(J.a)({
					channelAction: e => Object(te.c)(e),
					channel: e => Object($.m)(e),
					contacts: ee.h,
					currentUserName: se.b,
					existingGroupUsers: e => {
						const t = Object($.B)(e, "members");
						return t && t.map(e => e.id)
					},
					isCreatingChannel: $.L,
					loadedContacts: ee.i,
					knownContacts: ee.g,
					memberCount: e => Object($.B)(e, "memberCount"),
					selectedUsers: ee.j,
					selectedUsersCount: ee.k
				}),
				le = Object(h.b)(ie, e => ({
					onCreateNewChannel: (t, s, n) => e(Object(u.A)(t, s, n)),
					onInviteUsersToExistingChannel: t => e(Object(u.F)(t)),
					onIdentifyContact: t => e(Object(d.j)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(u.M)()), e(Object(p.j)())
					},
					onSelectUser: t => e(Object(C.m)(t)),
					onUnselectUser: t => e(Object(C.t)(t)),
					removeAllSelectedUsers: () => e(Object(C.s)()),
					requestSuggestedContacts: () => e(Object(d.l)())
				}));
			class he extends l.a.Component {
				constructor(e) {
					super(e), this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === K.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === K.a.INVITE_MEMBERS, this.isShareToNewChannelAction = () => this.props.channelAction === K.a.SHARE_NEW_CHANNEL, this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							memberCount: e,
							selectedUsersCount: t
						} = this.props;
						return t + (this.isInviteMembersURLAction() ? e : 0) > K.f
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: s
						} = this.props, n = this.isCreateChannelURLAction(), a = this.isShareToNewChannelAction(), r = e < 0, c = s > 1, o = this.hasTooManyMembers();
						return !s || t || (n || a) && c && (r || o) || !(n || a) && o
					}, this.getInviteMembersText = () => n.fbt._("Add to group", null, {
						hk: "4n0y9e"
					}), this.primaryButtonText = () => this.isInviteMembersURLAction() ? this.getInviteMembersText() : n.fbt._("Start a chat", null, {
						hk: "4BZNdM"
					}), this.getBlockedContactText = e => e.isBlocked ? n.fbt._("blocked", null, {
						hk: "34l2Jz"
					}) : !1 === e.acceptChats ? n.fbt._("unable to message this account", null, {
						hk: "SDEZ3"
					}) : n.fbt._("already in group", null, {
						hk: "2obrxR"
					}), this.getOverlayTitle = () => this.isCreateChannelURLAction() || this.isShareToNewChannelAction() ? n.fbt._("Create Chat", null, {
						hk: "1Qge6s"
					}) : this.getInviteMembersText(), this.getOverlayMessage = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return e === K.f ? n.fbt._("Maximum group size reached", null, {
							hk: "7hpRV"
						}) : ""
					}, this.getSelectedContacts = this.getSelectedContacts.bind(this), this.onContactsSelect = this.onContactsSelect.bind(this), this.onFilterContacts = this.onFilterContacts.bind(this), this.onFilterReset = this.onFilterReset.bind(this), this.onSubmit = this.onSubmit.bind(this), this.onCancel = this.onCancel.bind(this), this.handleChannelNameInput = this.handleChannelNameInput.bind(this), this.searchBarElement = l.a.createRef(), this.state = {
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
							onSelectUser: s,
							onUnselectUser: n,
							selectedUsers: a,
							selectedUsersCount: r
						} = this.props;
					a.includes(t) ? n(t) : (r < K.f || r < 1) && (this.setState(e => ({
						...e,
						resetFilter: !0
					})), s(t)), this.searchBarElement.current && this.searchBarElement.current.focus()
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
						onInviteUsersToExistingChannel: t,
						messageValue: s
					} = this.props, n = this.getSelectedContacts().map(e => e.id);
					if (n && n.length) {
						const a = this.getGroupName();
						if (this.isCreateChannelURLAction()) return e(n, a);
						if (this.isShareToNewChannelAction()) return e(n, a, s);
						t(n)
					}
				}
				onCancel() {
					this.props.onCancelAndGoBack()
				}
				getSelectedContacts() {
					const {
						loadedContacts: e,
						selectedUsers: t
					} = this.props, s = [];
					return t.map(t => {
						for (const n in e) oe(e[n].id) === t && s.push(e[n])
					}), s
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
					return t ? e.filter(e => oe(e.name).includes(oe(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && oe(e.name) === oe(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[oe(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return K.e - e.length
				}
				getGroupName() {
					const e = this.state.groupName.trim();
					if (e) return e;
					let t = this.getSelectedContacts();
					if (!t.length) return "";
					let {
						currentUserName: s
					} = this.props;
					for (; t.length && s.length + t[0].name.length <= K.e;) s = s + ", " + t[0].name, t = t.splice(1, t.length - 1);
					return s
				}
				render() {
					const {
						props: {
							className: e,
							onIdentifyContact: t,
							selectedUsersCount: s
						},
						state: {
							filter: a,
							resetFilter: c,
							groupName: i
						},
						isUserSelected: h,
						isExistingGroupUser: m,
						onFilterReset: u,
						onFilterContacts: d,
						onContactsSelect: p,
						onSubmit: C,
						onCancel: f
					} = this, x = this.getSelectedContacts(), U = this.getFilteredContacts(), _ = this.getLoadedContact(), N = !!a && !_, E = !!_, S = !this.getIsValidUser(a), k = this.handleChannelNameInput, y = this.availableCharacters(i), v = this.isSubmitDisabled(y), B = this.primaryButtonText(), I = this.isCreateChannelURLAction(), T = this.isShareToNewChannelAction(), R = s >= K.f;
					return l.a.createElement(Q.a, {
						className: e,
						onSubmit: Object(g.a)(C),
						innerContent: !0,
						form: !0
					}, l.a.createElement("div", {
						className: ae.a.OverlayContent
					}, l.a.createElement(X.a, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: R
					}), l.a.createElement("div", {
						className: ae.a.Content
					}, (I || T) && l.a.createElement(ce, {
						isShown: s > 1
					}, l.a.createElement(V.a, {
						className: ae.a.ChannelNameInput,
						handleChannelNameInput: k,
						placeholder: n.fbt._("Group name", null, {
							hk: "3YSrvu"
						})
					}, l.a.createElement(Z.a, {
						count: y
					}))), l.a.createElement(L, {
						innerRef: this.searchBarElement,
						filter: a,
						resetFilter: c,
						selectedContacts: x,
						onFilterReset: u,
						onFilterContacts: d,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), l.a.createElement(b.b, {
						className: ae.a.Scroller,
						loadMoreRows: r.a
					}, o()(U, e => e.name).map(e => l.a.createElement("div", {
						className: ae.a.ListItem,
						key: e.name
					}, m(e.id) || e.isBlocked || !1 === e.acceptChats ? l.a.createElement(z, {
						contact: e,
						context: this.getBlockedContactText(e)
					}) : l.a.createElement(w, {
						formName: re,
						contact: e,
						onChange: p,
						isChecked: h
					}))), (N || E) && l.a.createElement("div", {
						className: ae.a.ListItemHeader
					}, l.a.createElement("h4", {
						className: ae.a.ChatListHeader
					}, n.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), N && !E && l.a.createElement("div", {
						className: ae.a.ListItem
					}, l.a.createElement(O.a, {
						className: ae.a.Checkbox,
						type: "checkbox",
						disabled: !0,
						name: re,
						value: a,
						onChange: p
					}, l.a.createElement("span", {
						className: ae.a.Name
					}, a, S && l.a.createElement("span", {
						className: ae.a.Error
					}, n.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), E && _ && l.a.createElement("div", {
						className: ae.a.ListItem
					}, !I && !T && (m(_.id) || _.isBlocked) || !1 === _.acceptChats ? l.a.createElement(z, {
						contact: _,
						context: this.getBlockedContactText(_)
					}) : l.a.createElement(w, {
						formName: re,
						contact: _,
						onChange: p,
						isChecked: h
					})))), l.a.createElement(Y.a, {
						primaryButtonText: B,
						primaryButtonDisabled: v,
						secondaryButtonAction: f
					})))
				}
			}
			he.displayName = "OverlayCreateChannel";
			t.default = le(he)
		},
		"./src/chat/components/SearchBar/index.m.less": function(e, t, s) {
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
		"./src/chat/components/SelectableUser/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				UserPic: "zW7z1umVHXoa1LGs0PhqY",
				userPic: "zW7z1umVHXoa1LGs0PhqY",
				Name: "_1HoUzT_zRlnm-zLSJPRh28",
				name: "_1HoUzT_zRlnm-zLSJPRh28"
			}
		},
		"./src/chat/components/UnselectableUser/index.m.less": function(e, t, s) {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayCreateChannel.36f5587ad8e16b9b1ddb.js.map