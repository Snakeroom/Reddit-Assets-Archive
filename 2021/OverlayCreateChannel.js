// https://www.redditstatic.com/desktop2x/OverlayCreateChannel.0a37bb6ffe35760611cc.js
// Retrieved at 12/1/2021, 5:30:06 PM by Reddit Dataminer v1.0.0
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
				UserNotFound: "P_88R_H4Ww-L1MTF4iRkY",
				userNotFound: "P_88R_H4Ww-L1MTF4iRkY",
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
				shown: "_2Mva-9o8IuN_QrvvZYRHyH",
				CopyInviteLink: "zBON5dtOZB94MwnSEa0f1",
				copyInviteLink: "zBON5dtOZB94MwnSEa0f1",
				LinkButton: "_2bL65Uh_dTxKAC0V5UemZT",
				linkButton: "_2bL65Uh_dTxKAC0V5UemZT",
				CopyInviteLinkContent: "_1WJFvb2J-BkKyg9BR3hNuM",
				copyInviteLinkContent: "_1WJFvb2J-BkKyg9BR3hNuM",
				CopyInviteLinkContentHeader: "_36Z3BkLCEma7aH8PCn9HqE",
				copyInviteLinkContentHeader: "_36Z3BkLCEma7aH8PCn9HqE",
				CopyInviteLinkContentBody: "zW47C_63NuY4bkUzwwmLj",
				copyInviteLinkContentBody: "zW47C_63NuY4bkUzwwmLj",
				SettingsButton: "_2HDk8OC1nlfD5GBh0lKbwh",
				settingsButton: "_2HDk8OC1nlfD5GBh0lKbwh",
				CopyInviteLinkPlaceholder: "_2LJZiLEkUqmR3pBIvFrosC",
				copyInviteLinkPlaceholder: "_2LJZiLEkUqmR3pBIvFrosC"
			}
		},
		"./src/chat/components/OverlayCreateChannel/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "OverlayCreateChannel", (function() {
				return le
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/noop.js"),
				r = n.n(a),
				c = n("./node_modules/lodash/uniqBy.js"),
				o = n.n(c),
				i = n("./node_modules/react/index.js"),
				l = n.n(i),
				h = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				d = n("./src/chat/actions/channel.ts"),
				u = n("./src/chat/actions/channel/dropdown.ts"),
				p = n("./src/chat/actions/inviteLink/index.ts"),
				C = n("./src/chat/actions/sendbird/index.ts"),
				b = n("./src/chat/actions/tracking.ts"),
				k = n("./src/chat/actions/user.ts"),
				_ = n("./src/chat/components/Scroller/index.tsx"),
				N = n("./node_modules/lodash/last.js"),
				U = n.n(N),
				x = n("./src/lib/lessComponent.tsx"),
				f = n("./src/chat/constants/keys.ts"),
				E = n("./src/chat/helpers/dom.ts"),
				g = n("./src/chat/icons/svgs/Search/index.tsx"),
				v = n("./src/chat/components/SearchBar/index.m.less"),
				S = n.n(v);
			const y = x.a.span("Bubble", S.a),
				B = x.a.span("SearchBarField", S.a),
				L = x.a.input("SearchBarInput", S.a);
			class I extends l.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case f.f:
							case f.e: {
								const t = this.searchBarInputRef.current;
								return t && t.focus(), this.props.onUnselect(e.id)
							}
							case f.b: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case f.c: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this), this.searchBarInputRef = l.a.createRef()
				}
				stopEnter(e) {
					e.key === f.g && e.preventDefault()
				}
				onFilterChange(e) {
					this.props.onFilterContacts(e.currentTarget.value)
				}
				searchKeyHandler(e) {
					const {
						props: {
							onFilterContacts: t,
							onIdentifyContact: n,
							onIdentifyContactTimeout: s
						}
					} = this, a = e.currentTarget, r = () => a.value;
					switch (this.timeoutToken && clearTimeout(this.timeoutToken), this.timeoutToken = setTimeout(() => {
						r() && n(r())
					}, s), e.key) {
						case f.g:
							return n(r());
						case f.b:
						case f.f:
						case f.e:
							if (0 === r().length) {
								const e = U()(this.props.selectedContacts);
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
							onFilterReset: a,
							className: r
						}
					} = this, c = t ? "" : e;
					return l.a.createElement(_.b, {
						autoScrollBottom: !0,
						className: Object(m.a)(S.a.SearchBarWrapper, r)
					}, l.a.createElement(g.a, {
						className: S.a.SearchIcon
					}), l.a.createElement(B, null, n && n.length > 0 && n.map((e, t) => l.a.createElement(y, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(E.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), l.a.createElement(L, {
						placeholder: n.length ? "" : s.fbt._("Search usernames", null, {
							hk: "1akjTq"
						}),
						key: "search-bar",
						type: "text",
						autoFocus: !0,
						value: c,
						onFocus: a,
						onChange: this.onFilterChange,
						onKeyDown: this.stopEnter,
						onKeyUp: this.searchKeyHandler,
						innerRef: this.searchBarInputRef
					})))
				}
			}
			I.defaultProps = {
				onIdentifyContactTimeout: 1e3
			};
			var O = n("./src/chat/components/UserMetaInfo/index.tsx"),
				j = n("./src/chat/controls/Checkbox/index.tsx"),
				T = n("./src/chat/icons/Userpic/index.tsx"),
				w = n("./src/chat/components/SelectableUser/index.m.less"),
				R = n.n(w);
			var H = ({
					formName: e,
					contact: t,
					contact: {
						id: n,
						name: s
					},
					onChange: a,
					isChecked: r
				}) => l.a.createElement(j.a, {
					className: R.a.Checkbox,
					type: "checkbox",
					name: e,
					value: s,
					onChange: a,
					checked: r(n),
					id: n
				}, l.a.createElement("div", {
					className: R.a.UserInfoWrapper
				}, l.a.createElement(T.a, {
					className: R.a.UserPic,
					userId: n,
					width: "40px",
					height: "40px"
				}), l.a.createElement("div", {
					className: R.a.UserMetaWrapper
				}, l.a.createElement("div", {
					className: R.a.Name
				}, s), l.a.createElement(O.a, {
					contact: t
				})))),
				M = n("./src/chat/components/UnselectableUser/index.m.less"),
				F = n.n(M);
			var W = ({
					contact: e,
					contact: {
						id: t,
						name: n
					},
					context: s
				}) => l.a.createElement("span", {
					className: F.a.Wrapper
				}, l.a.createElement("span", {
					className: F.a.Content
				}, l.a.createElement(T.a, {
					className: F.a.UserPic,
					userId: t,
					width: "40px",
					height: "40px"
				}), l.a.createElement("div", {
					className: F.a.UserMetaWrapper
				}, l.a.createElement("span", {
					className: F.a.Name
				}, n), l.a.createElement(O.a, {
					contact: e
				}))), l.a.createElement("span", {
					className: F.a.Context
				}, s)),
				A = n("./src/chat/constants/channels.ts"),
				D = n("./src/chat/controls/Button/index.tsx"),
				P = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				q = n("./src/chat/controls/Counter/index.tsx"),
				Z = n("./src/chat/controls/Overlay/index.tsx"),
				z = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				G = n("./src/chat/controls/OverlayHeader/index.tsx"),
				K = n("./src/chat/helpers/chatSelector.ts"),
				V = n("./src/chat/icons/svgs/Link/index.tsx"),
				J = n("./src/chat/selectors/channels.ts"),
				Q = n("./src/chat/selectors/contacts.ts"),
				Y = n("./src/chat/selectors/experiments.ts"),
				X = n("./src/chat/selectors/inviteLink.ts"),
				$ = n("./src/chat/selectors/platform.ts"),
				ee = n("./src/chat/selectors/user.ts"),
				te = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				ne = n.n(te);
			const se = "contactForm",
				ae = ({
					className: e,
					children: t,
					isShown: n
				}) => l.a.createElement("div", {
					className: Object(m.a)(ne.a.ChannelNameWrapper, e, {
						[ne.a.shown]: n
					})
				}, t),
				re = e => e.toLocaleLowerCase(),
				ce = Object(K.a)({
					channelAction: e => Object($.d)(e),
					channel: e => Object(J.m)(e),
					contacts: Q.h,
					currentUserName: ee.b,
					existingGroupUsers: e => {
						const t = Object(J.B)(e, "members");
						return t && t.map(e => e.id)
					},
					isCreatingChannel: J.L,
					loadedContacts: Q.i,
					knownContacts: Q.g,
					memberCount: e => Object(J.B)(e, "memberCount"),
					selectedUsers: Q.j,
					selectedUsersCount: Q.k,
					isBlockedUserMessageEnabled: Y.d
				}),
				oe = Object(h.b)(ce, e => ({
					onCreateNewChannel: (t, n, s) => e(Object(d.A)(t, n, s)),
					onInviteUsersToExistingChannel: t => e(Object(d.F)(t)),
					onIdentifyContact: t => e(Object(C.j)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(d.M)()), e(Object(b.j)())
					},
					onSelectUser: t => e(Object(k.m)(t)),
					onUnselectUser: t => e(Object(k.t)(t)),
					removeAllSelectedUsers: () => e(Object(k.s)()),
					requestSuggestedContacts: () => e(Object(C.l)())
				})),
				ie = ({
					channelId: e,
					isHidden: t
				}) => {
					const n = Object(h.d)(),
						a = Object(h.e)(Y.h),
						r = Object(h.e)(Y.f),
						c = Object(h.e)(ee.a),
						o = e || c,
						i = Object(h.e)(J.a),
						m = Object(h.e)(e => Object(X.a)(e, o)),
						d = Object(h.e)(e => Object(X.b)(e, o));
					return a && e || r && !e ? l.a.createElement("span", {
						className: ne.a.CopyInviteLink
					}, l.a.createElement(D.b, {
						className: ne.a.LinkButton
					}, l.a.createElement(V.a, null)), l.a.createElement("div", {
						className: ne.a.CopyInviteLinkContent
					}, l.a.createElement("div", {
						className: ne.a.CopyInviteLinkContentHeader
					}, e ? s.fbt._("Invite with link", null, {
						hk: "37SZLa"
					}) : s.fbt._("Start a direct chat", null, {
						hk: "3TR4iZ"
					})), m && d && l.a.createElement("div", {
						className: ne.a.CopyInviteLinkContentBody
					}, `${s.fbt._("Limited to",null,{hk:"3uHU48"})} ${d} ${s.fbt._("invites",null,{hk:"iP9qt"})}. `, !e || i ? l.a.createElement("button", {
						role: "button",
						onClick: Object(E.b)(() => {
							n(Object(u.b)(o, !e))
						}),
						className: ne.a.SettingsButton
					}, s.fbt._("Edit link", null, {
						hk: "2ryT90"
					})) : null)), l.a.createElement(D.a, {
						onClick: Object(E.b)(() => {
							n(Object(p.e)(o, !e)), n(Object(b.o)(p.b.CHAT_SETTINGS))
						}),
						primary: !0,
						disabled: t
					}, s.fbt._("Copy Link", null, {
						hk: "nnSxN"
					}))) : null
				};
			class le extends l.a.Component {
				constructor(e) {
					super(e), this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === A.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === A.a.INVITE_MEMBERS, this.isShareToNewChannelAction = () => this.props.channelAction === A.a.SHARE_NEW_CHANNEL, this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							memberCount: e,
							selectedUsersCount: t
						} = this.props;
						return t + (this.isInviteMembersURLAction() ? e : 0) > A.h
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: n
						} = this.props, s = this.isCreateChannelURLAction(), a = this.isShareToNewChannelAction(), r = e < 0, c = n > 1, o = this.hasTooManyMembers();
						return !n || t || (s || a) && c && (r || o) || !(s || a) && o
					}, this.getInviteMembersText = () => s.fbt._("Invite Members", null, {
						hk: "1ejIPa"
					}), this.primaryButtonText = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return this.isInviteMembersURLAction() ? s.fbt._("Invite to Group", null, {
							hk: "1obdqW"
						}) : e > 1 ? s.fbt._("Start Group Chat", null, {
							hk: "4rRvvK"
						}) : s.fbt._("Start Chat", null, {
							hk: "sHVDx"
						})
					}, this.getBlockedContactText = e => e.isBlocked ? s.fbt._("blocked", null, {
						hk: "34l2Jz"
					}) : !1 === e.acceptChats ? s.fbt._("unable to message this account", null, {
						hk: "SDEZ3"
					}) : s.fbt._("already in group", null, {
						hk: "2obrxR"
					}), this.getOverlayTitle = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return this.isCreateChannelURLAction() ? e > 1 ? s.fbt._("New Group", null, {
							hk: "2UrrCc"
						}) : s.fbt._("New Chat", null, {
							hk: "2TYMUW"
						}) : this.getInviteMembersText()
					}, this.getOverlayMessage = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return e === A.h ? s.fbt._("Maximum group size reached", null, {
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
							onSelectUser: n,
							onUnselectUser: s,
							selectedUsers: a,
							selectedUsersCount: r
						} = this.props;
					a.includes(t) ? s(t) : (r < A.h || r < 1) && (this.setState(e => ({
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
						onInviteUsersToExistingChannel: t,
						messageValue: n
					} = this.props, s = this.getSelectedContacts().map(e => e.id);
					if (s && s.length) {
						const a = this.getGroupName();
						if (this.isCreateChannelURLAction()) return e(s, a);
						if (this.isShareToNewChannelAction()) return e(s, a, n);
						t(s)
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
						for (const s in e) re(e[s].id) === t && n.push(e[s])
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
					return t ? e.filter(e => re(e.name).includes(re(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && re(e.name) === re(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[re(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return A.g - e.length
				}
				getGroupName() {
					const e = this.state.groupName.trim();
					if (e) return e;
					let t = this.getSelectedContacts();
					if (!t.length) return "";
					let {
						currentUserName: n
					} = this.props;
					for (; t.length && n.length + t[0].name.length <= A.g;) n = n + ", " + t[0].name, t = t.splice(1, t.length - 1);
					return n
				}
				render() {
					const {
						props: {
							className: e,
							onIdentifyContact: t,
							selectedUsersCount: n,
							channel: a,
							isBlockedUserMessageEnabled: c
						},
						state: {
							filter: i,
							resetFilter: h,
							groupName: d
						},
						isUserSelected: u,
						isExistingGroupUser: p,
						onFilterReset: C,
						onFilterContacts: b,
						onContactsSelect: k,
						onSubmit: N,
						onCancel: U
					} = this, x = this.getSelectedContacts(), f = this.getFilteredContacts(), g = this.getLoadedContact(), v = !!i && !g, S = !!g, y = !this.getIsValidUser(i), B = this.handleChannelNameInput, L = this.availableCharacters(d), O = this.isSubmitDisabled(L), T = this.primaryButtonText(), w = this.isCreateChannelURLAction(), R = this.isShareToNewChannelAction(), M = n >= A.h;
					return l.a.createElement(Z.a, {
						className: e,
						onSubmit: Object(E.a)(N),
						innerContent: !0,
						form: !0
					}, l.a.createElement("div", {
						className: ne.a.OverlayContent
					}, l.a.createElement(G.a, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: M
					}), l.a.createElement("div", {
						className: ne.a.Content
					}, !R && l.a.createElement(ie, {
						channelId: null == a ? void 0 : a.channelId,
						isHidden: !!n
					}), l.a.createElement(I, {
						innerRef: this.searchBarElement,
						filter: i,
						resetFilter: h,
						selectedContacts: x,
						onFilterReset: C,
						onFilterContacts: b,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), (w || R) && l.a.createElement(ae, {
						isShown: n > 1
					}, l.a.createElement(P.a, {
						className: ne.a.ChannelNameInput,
						handleChannelNameInput: B,
						placeholder: s.fbt._("Name this group (optional)", null, {
							hk: "29Zvnb"
						})
					}, l.a.createElement(q.a, {
						count: L
					}))), l.a.createElement(_.b, {
						className: ne.a.Scroller,
						loadMoreRows: r.a
					}, o()(f, e => e.name).map(e => l.a.createElement("div", {
						className: ne.a.ListItem,
						key: e.name
					}, c || !p(e.id) && !e.isBlocked && !1 !== e.acceptChats ? l.a.createElement(H, {
						formName: se,
						contact: e,
						onChange: k,
						isChecked: u
					}) : l.a.createElement(W, {
						contact: e,
						context: this.getBlockedContactText(e)
					}))), (v || S) && l.a.createElement("div", {
						className: ne.a.ListItemHeader
					}, l.a.createElement("h4", {
						className: ne.a.ChatListHeader
					}, s.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), v && !S && l.a.createElement("div", {
						className: Object(m.a)(ne.a.ListItem, ne.a.UserNotFound)
					}, l.a.createElement(j.a, {
						className: ne.a.Checkbox,
						type: "checkbox",
						disabled: !0,
						name: se,
						value: i,
						onChange: k
					}, l.a.createElement("span", {
						className: ne.a.Name
					}, i, y && l.a.createElement("span", {
						className: ne.a.Error
					}, s.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), S && g && l.a.createElement("div", {
						className: ne.a.ListItem
					}, (c || w || R || !p(g.id) && !g.isBlocked) && !1 !== g.acceptChats ? l.a.createElement(H, {
						formName: se,
						contact: g,
						onChange: k,
						isChecked: u
					}) : l.a.createElement(W, {
						contact: g,
						context: this.getBlockedContactText(g)
					})))), l.a.createElement(z.a, {
						primaryButtonText: T,
						primaryButtonDisabled: O,
						secondaryButtonAction: U
					})))
				}
			}
			t.default = oe(le)
		},
		"./src/chat/components/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				SearchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				searchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				SearchBarLabel: "n8QUlQDkULMxz2adkFkZN",
				searchBarLabel: "n8QUlQDkULMxz2adkFkZN",
				SearchIcon: "_1fF5rR85aN7B4xWTLIhPjw",
				searchIcon: "_1fF5rR85aN7B4xWTLIhPjw",
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
				name: "_1HoUzT_zRlnm-zLSJPRh28",
				UserInfoWrapper: "_9qboECu4INdyuSmkF-DNd",
				userInfoWrapper: "_9qboECu4INdyuSmkF-DNd",
				UserMetaWrapper: "_3DT169WjMBbQwP3HsZzHXU",
				userMetaWrapper: "_3DT169WjMBbQwP3HsZzHXU"
			}
		},
		"./src/chat/components/UnselectableUser/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "oifWWeXtU7UUw2o2ujOPY",
				wrapper: "oifWWeXtU7UUw2o2ujOPY",
				Content: "Dfb74heOWSZF6_doPiIDe",
				content: "Dfb74heOWSZF6_doPiIDe",
				UserMetaWrapper: "_2TqNxQr37JywB7jjqZlOmU",
				userMetaWrapper: "_2TqNxQr37JywB7jjqZlOmU",
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayCreateChannel.0a37bb6ffe35760611cc.js.map